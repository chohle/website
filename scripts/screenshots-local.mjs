// Per-language screenshot capture against a LOCAL chohle instance.
//
// Unlike scripts/screenshots.mjs (which targets the public demo and needs no
// login), this script logs into a normal single-tenant instance, switches the
// app language through the owner setting, captures every screen the website
// uses, and writes <name>-<lang>.jpg into public/screenshots.
//
// For the assistant shot it seeds a short, curated conversation (in the active
// language) so the screenshot shows the approval cards, then removes it again,
// leaving your real conversations untouched.
//
// PREREQUISITES:
//   cd website && npm install
//   npx playwright install chromium   (or rely on an existing browser cache)
//   the app running on BASE_URL with CHOHLE_ASSISTANT=true
//
// RUN:
//   node scripts/screenshots-local.mjs
//
// Env vars:
//   BASE_URL    app base url        (default http://localhost:3000)
//   OUT_DIR     output folder       (default ./public/screenshots)
//   SCALE       device scale 1|2    (default 2, retina; existing shots are 2)
//   LANGS       langs to capture    (default en,de,fr,it)
//   ONLY        shot names to do     (e.g. ONLY=assistant,dashboard)
//   APP_USER    login username      (default owner)
//   APP_PASS    login password      (default change-me)
//   DB_CONTAINER  docker container for the app db (default chohle-app-1)
//   DB_PATH       db path inside the container (default /app/dbdata/chohle.db)

import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const OUT = path.resolve(process.env.OUT_DIR || 'public/screenshots');
const SCALE = Number(process.env.SCALE || 2);
const LANGS = (process.env.LANGS || 'en,de,fr,it').split(',').map((s) => s.trim());
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(',').map((s) => s.trim())) : null;
const APP_USER = process.env.APP_USER || 'owner';
const APP_PASS = process.env.APP_PASS || 'change-me';
const DB_CONTAINER = process.env.DB_CONTAINER || 'chohle-app-1';
const DB_PATH = process.env.DB_PATH || '/app/dbdata/chohle.db';
const W = 1456;
const H = 1080;

// Each shot: how to reach it (see scripts/screenshots.mjs for the field guide).
const SHOTS = [
  { name: 'dashboard', path: '/' },
  { name: 'search', path: '/', click: 'button.search', type: 'Studio' },
  { name: 'customers', path: '/customers' },
  { name: 'customer-detail', path: '/customers', row: true },
  { name: 'quotes', path: '/quotes' },
  { name: 'invoices', path: '/invoices' },
  { name: 'invoice-editor', path: '/invoices', row: true, saveIdAs: 'inv' },
  { name: 'invoice-pdf', fromId: 'inv', suffix: '/print' },
  { name: 'pipeline', path: '/sales' },
  { name: 'project-detail', path: '/sales', openFirst: '.deal-card' },
  { name: 'expenses', path: '/expenses' },
  { name: 'income', path: '/income' },
  { name: 'categories', path: '/categories' },
  { name: 'articles', path: '/articles' },
  { name: 'banking', path: '/banking' },
  { name: 'triage', path: '/triage' },
  { name: 'reminders', path: '/reminders' },
  { name: 'conversations', path: '/conversations' },
  { name: 'activity', path: '/activity' },
  { name: 'assistant', path: '/assistant', assistant: true },
  { name: 'settings', path: '/settings' },
  { name: 'signatures', path: '/settings', tabText: /signatur|firme/i },
  { name: 'email-setup', path: '/settings', tabText: /sync/i },
];

// A short, curated assistant conversation per language. It ends on a pending
// approval so the screenshot shows the New customer / New invoice cards with the
// Approve / Cancel buttons, which is the whole point of the feature.
const ASSISTANT = {
  en: {
    title: 'Add Müller Bau and invoice 8h consulting',
    ask: 'Add Müller Bau in Zürich as a customer and invoice them 8h consulting at 150.',
    reply: 'I prepared a new customer and a draft invoice. Review the proposed changes below and approve them.',
    customer: ['Müller Bau', 'Zürich, Switzerland', 'Document language: German'],
    invoice: ['Consulting: 8 h at CHF 150.00', 'MWST 8.1%', 'Total CHF 1297.20'],
  },
  de: {
    title: 'Müller Bau anlegen und 8 Std. Beratung verrechnen',
    ask: 'Füge Müller Bau in Zürich als Kunde hinzu und verrechne 8 Std. Beratung à 150.',
    reply: 'Ich habe einen neuen Kunden und eine Rechnung im Entwurf vorbereitet. Prüfe die vorgeschlagenen Änderungen unten und bestätige sie.',
    customer: ['Müller Bau', 'Zürich, Schweiz', 'Dokumentsprache: Deutsch'],
    invoice: ['Beratung: 8 Std. à CHF 150.00', 'MWST 8.1%', 'Total CHF 1297.20'],
  },
  fr: {
    title: 'Ajouter Müller Bau et facturer 8h de conseil',
    ask: 'Ajoute Müller Bau à Zurich comme client et facture-lui 8h de conseil à 150.',
    reply: "J'ai préparé un nouveau client et une facture en brouillon. Vérifie les changements proposés ci-dessous et valide-les.",
    customer: ['Müller Bau', 'Zurich, Suisse', 'Langue du document : allemand'],
    invoice: ['Conseil : 8 h à CHF 150.00', 'TVA 8.1%', 'Total CHF 1297.20'],
  },
  it: {
    title: 'Aggiungi Müller Bau e fattura 8h di consulenza',
    ask: 'Aggiungi Müller Bau a Zurigo come cliente e fattura 8h di consulenza a 150.',
    reply: 'Ho preparato un nuovo cliente e una fattura in bozza. Controlla le modifiche proposte qui sotto e confermale.',
    customer: ['Müller Bau', 'Zurigo, Svizzera', 'Lingua del documento: tedesco'],
    invoice: ['Consulenza: 8 h a CHF 150.00', 'IVA 8.1%', 'Totale CHF 1297.20'],
  },
};

/** Build the turns JSON for a curated assistant conversation. */
function curatedTurns(lang) {
  const c = ASSISTANT[lang] ?? ASSISTANT.en;
  return [
    { role: 'user', content: c.ask },
    {
      role: 'assistant',
      content: c.reply,
      state: 'pending',
      proposals: [
        { kind: 'customer', mode: 'create', summary: c.customer, action: { type: 'propose_customer' } },
        { kind: 'invoice', mode: 'create', summary: c.invoice, action: { type: 'propose_invoice' } },
      ],
    },
  ];
}

/** Run a tiny node snippet inside the app container against the sqlite db. */
function dbExec(js, jsonArg) {
  const arg = jsonArg ? Buffer.from(JSON.stringify(jsonArg)).toString('base64') : '';
  const out = execFileSync(
    'docker',
    ['exec', DB_CONTAINER, 'node', '-e', js, '--', DB_PATH, arg],
    { encoding: 'utf8' }
  );
  return out.trim();
}

/** Insert the curated conversation as the most recent; returns its row id. */
function seedAssistant(lang) {
  const payload = { title: ASSISTANT[lang]?.title ?? ASSISTANT.en.title, turns: curatedTurns(lang) };
  const js = `
    const db = require('better-sqlite3')(process.argv[1]);
    const p = JSON.parse(Buffer.from(process.argv[2], 'base64').toString('utf8'));
    const ts = '2099-01-01 00:00:00';
    const r = db.prepare('INSERT INTO assistant_conversations (title, turns, created_at, updated_at) VALUES (?,?,?,?)')
      .run(p.title, JSON.stringify(p.turns), ts, ts);
    process.stdout.write(String(r.lastInsertRowid));
  `;
  return dbExec(js, payload);
}

/** Remove a seeded conversation by id. */
function unseedAssistant(id) {
  if (!id) return;
  const js = `
    const db = require('better-sqlite3')(process.argv[1]);
    db.prepare('DELETE FROM assistant_conversations WHERE id = ?').run(Number(process.argv[2]));
  `;
  execFileSync('docker', ['exec', DB_CONTAINER, 'node', '-e', js, '--', DB_PATH, String(id)], { encoding: 'utf8' });
}

async function settle(page) {
  try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
  await page.waitForTimeout(900); // let fonts, charts and images paint
}

/** Log in once via the auth endpoint, then confirm the session is live. */
async function login(page) {
  await page.goto(`${BASE}/login`, { waitUntil: 'domcontentloaded' });
  const res = await page.evaluate(async ([u, p]) => {
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ username: u, password: p }),
    });
    return r.status;
  }, [APP_USER, APP_PASS]);
  if (res >= 400) throw new Error(`login failed (HTTP ${res})`);
}

/** Switch the app to a language by writing the owner setting, then reload. */
async function setLanguage(page, lang) {
  const status = await page.evaluate(async (l) => {
    const r = await fetch('/api/locale', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ locale: l }),
    });
    return r.status;
  }, lang);
  if (status >= 400) throw new Error(`locale switch failed (HTTP ${status})`);
}

const browser = await chromium.launch();
fs.mkdirSync(OUT, { recursive: true });

const ctx = await browser.newContext({
  viewport: { width: W, height: H },
  deviceScaleFactor: SCALE,
  locale: 'en-US',
});
const page = await ctx.newPage();
await login(page);

for (const lang of LANGS) {
  console.log(`\n=== ${lang} ===`);
  try {
    await setLanguage(page, lang);
  } catch (e) {
    console.error(`  ! couldn't switch to ${lang}: ${e.message}`);
  }

  const ids = {};
  let seededId = null;

  for (const s of SHOTS) {
    if (ONLY && !ONLY.has(s.name)) continue;
    try {
      if (s.assistant) seededId = seedAssistant(lang);

      const url = s.fromId
        ? `${BASE}/invoices/${ids[s.fromId] || '1'}${s.suffix || ''}`
        : `${BASE}${s.path}`;
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await settle(page);

      if (s.row) {
        const firstRow = page.locator('tbody tr').first();
        const rowLink = firstRow.locator('a[href]').first();
        if (await rowLink.count()) await rowLink.click({ timeout: 8000 });
        else await firstRow.click({ timeout: 8000 });
        await settle(page);
        if (s.saveIdAs) {
          const m = page.url().match(/\/(\d+)(?:\/|$)/);
          ids[s.saveIdAs] = m ? m[1] : '1';
        }
      }
      if (s.openFirst) {
        await page.locator(s.openFirst).first().click({ timeout: 8000 }).catch(() => {});
        await settle(page);
      }
      if (s.tabText) {
        await page.locator('.inner-nav .nav-item').filter({ hasText: s.tabText }).first().click().catch(() => {});
        await page.waitForTimeout(700);
      }
      if (s.click) {
        await page.locator(s.click).first().click().catch(() => {});
        await page.waitForTimeout(600);
      }
      if (s.type) {
        await page.keyboard.type(s.type);
        await page.waitForTimeout(900);
      }

      const file = path.join(OUT, `${s.name}-${lang}.jpg`);
      await page.screenshot({ path: file, type: 'jpeg', quality: 92 });
      console.log(`  ✓ ${s.name}`);
    } catch (e) {
      console.error(`  ✗ ${s.name}: ${e.message}`);
    } finally {
      if (s.assistant && seededId) {
        try { unseedAssistant(seededId); } catch (e) { console.error(`  ! cleanup: ${e.message}`); }
        seededId = null;
      }
    }
  }
}

// Restore the owner's original language so the app is left as we found it.
try { await setLanguage(page, 'de'); } catch {}

await ctx.close();
await browser.close();

// Refresh the manifest the docs use to resolve localized screenshots.
try {
  execFileSync('node', ['scripts/gen-manifest.mjs'], { stdio: 'inherit' });
} catch (e) {
  console.error(`! couldn't refresh manifest: ${e.message}`);
}

console.log(`\nDone. Files written to ${OUT}`);
