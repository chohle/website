// Per-language screenshot capture for the chohle marketing site.
//
// For each language it: opens the demo, switches the app language via
// Settings -> General -> Language (confirming the "Change language?" dialog),
// then captures every screen the website uses and writes <name>-<lang>.jpg into
// public/screenshots. The language switch persists across reloads, so each shot
// renders natively in en / de / fr / it.
//
// WHY A SCRIPT: the assistant's sandbox can't reach app.chohle.ch and the
// in-app browser can't save files, so capture has to run on your machine.
//
// PREREQUISITES (one time):
//   cd chohle-website/website
//   npm i -D playwright
//   npx playwright install chromium
//
// RUN (against the public demo — no login needed):
//   node scripts/screenshots.mjs
//
// Env vars:
//   BASE_URL  demo base url        (default https://app.chohle.ch)
//   OUT_DIR   output folder        (default ./public/screenshots)
//   SCALE     device scale 1|2     (default 2 — crisp/retina; 1 = smaller files)
//   LANGS     langs to capture     (default en,de,fr,it)
//   ONLY      shot names to do     (e.g. ONLY=dashboard,quotes)

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE_URL || 'https://app.chohle.ch').replace(/\/$/, '');
const OUT = path.resolve(process.env.OUT_DIR || 'public/screenshots');
const SCALE = Number(process.env.SCALE || 2);
const LANGS = (process.env.LANGS || 'en,de,fr,it').split(',').map((s) => s.trim());
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(',').map((s) => s.trim())) : null;
const W = 1456;
const H = 1080;

// Native option labels in the Language dropdown (language-independent).
const OPTION = { de: 'Deutsch', fr: 'Français', it: 'Italiano' };

// Each shot: how to reach it.
//   path      navigate straight to this route
//   row       click the first table row (opens a detail/editor page)
//   saveIdAs  remember the numeric id from the resulting URL (for invoice-pdf)
//   fromId    build the url from a remembered id + suffix
//   tab       after loading /settings, click the Nth .inner-nav tab
//             (0 Appearance · 1 General · 2 Mail sync · 3 Reminders · 4 Email template)
const SHOTS = [
  { name: 'dashboard', path: '/' },
  { name: 'customers', path: '/customers' },
  { name: 'customer-detail', path: '/customers', row: true },
  { name: 'quotes', path: '/quotes' },
  { name: 'invoices', path: '/invoices' },
  { name: 'invoice-editor', path: '/invoices', row: true, saveIdAs: 'inv' },
  { name: 'invoice-pdf', fromId: 'inv', suffix: '/print' },
  { name: 'pipeline', path: '/sales' }, // sales pipeline; swap to /procurement if you prefer
  { name: 'expenses', path: '/expenses' },
  { name: 'income', path: '/income' },
  { name: 'categories', path: '/categories' },
  { name: 'banking', path: '/payments' }, // bank reconciliation lives in Payments
  { name: 'reminders', path: '/reminders' },
  { name: 'conversations', path: '/conversations' },
  { name: 'settings', path: '/settings' },
  { name: 'email-setup', path: '/settings', tab: 2 }, // Mail sync tab
];

const HIDE = `document.querySelectorAll('.demo-banner').forEach(e => e.style.display = 'none');`;

async function settle(page) {
  try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
  await page.evaluate(HIDE).catch(() => {});
  await page.waitForTimeout(900); // let fonts, charts and images paint
}

// Switch the app to a language via Settings -> General -> Language -> Change.
// Runs from a fresh (English) context, so the labels/buttons are in English.
async function setLanguage(page, lang) {
  if (lang === 'en') return;
  await page.goto(`${BASE}/settings`, { waitUntil: 'domcontentloaded' });
  await settle(page);
  await page.locator('.inner-nav .nav-item').nth(1).click(); // General
  await page.waitForTimeout(600);
  await page.getByRole('combobox').first().click(); // open Language dropdown
  await page.waitForTimeout(400);
  await page.getByRole('option', { name: OPTION[lang] }).click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Change' }).click(); // confirm dialog
  await page.waitForTimeout(2500); // reseed + re-render
}

const browser = await chromium.launch();
fs.mkdirSync(OUT, { recursive: true });

for (const lang of LANGS) {
  console.log(`\n=== ${lang} ===`);
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: SCALE,
    locale: 'en-US',
  });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
  await settle(page);
  try {
    await setLanguage(page, lang);
  } catch (e) {
    console.error(`  ! couldn't switch to ${lang}: ${e.message}`);
  }

  const ids = {};
  for (const s of SHOTS) {
    if (ONLY && !ONLY.has(s.name)) continue;
    try {
      const url = s.fromId ? `${BASE}/invoices/${ids[s.fromId] || '1'}${s.suffix || ''}` : `${BASE}${s.path}`;
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await settle(page);

      if (s.row) {
        await page.locator('tbody tr').first().click({ timeout: 8000 });
        await settle(page);
        if (s.saveIdAs) {
          const m = page.url().match(/\/(\d+)(?:\/|$)/);
          ids[s.saveIdAs] = m ? m[1] : '1';
        }
      }
      if (s.tab != null) {
        await page.locator('.inner-nav .nav-item').nth(s.tab).click().catch(() => {});
        await page.waitForTimeout(700);
      }

      const file = path.join(OUT, `${s.name}-${lang}.jpg`);
      await page.screenshot({ path: file, type: 'jpeg', quality: 92 });
      console.log(`  ✓ ${s.name}`);
    } catch (e) {
      console.error(`  ✗ ${s.name}: ${e.message}`);
    }
  }
  await ctx.close();
}

await browser.close();
console.log(`\nDone. Files written to ${OUT}`);
