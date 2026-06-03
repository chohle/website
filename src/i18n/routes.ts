import { defaultLang, langs, type Lang } from "./config";

// Per-path-segment slug translations. The key is the canonical (English)
// segment; values are the localized slug used in each non-default language.
// The default locale always uses the canonical segment. Keep everything
// lowercase, ASCII and hyphenated so the URLs stay clean.
const SEGMENTS: Record<string, Partial<Record<Lang, string>>> = {
  // top level
  about: { de: "ueber-uns", fr: "a-propos", it: "chi-siamo" },
  features: { de: "funktionen", fr: "fonctionnalites", it: "funzionalita" },
  pricing: { de: "preise", fr: "tarifs", it: "prezzi" },
  privacy: { de: "datenschutz", fr: "confidentialite", it: "privacy" },
  docs: { de: "doku", fr: "docs", it: "documentazione" },
  // docs leaves
  quickstart: { de: "schnellstart", fr: "demarrage-rapide", it: "avvio-rapido" },
  "self-hosting": { de: "self-hosting", fr: "auto-hebergement", it: "self-hosting" },
  configuration: { de: "konfiguration", fr: "configuration", it: "configurazione" },
  dashboard: { de: "dashboard", fr: "tableau-de-bord", it: "dashboard" },
  invoicing: { de: "rechnungen", fr: "facturation", it: "fatturazione" },
  quotes: { de: "offerten", fr: "devis", it: "preventivi" },
  projects: { de: "projekte", fr: "projets", it: "progetti" },
  email: { de: "kunden-email", fr: "email-clients", it: "email-clienti" },
  "expenses-income": { de: "ausgaben-einnahmen", fr: "depenses-revenus", it: "uscite-entrate" },
  payments: { de: "zahlungen", fr: "paiements", it: "pagamenti" },
  "bank-reconciliation": { de: "bankabgleich", fr: "rapprochement-bancaire", it: "riconciliazione-bancaria" },
  reminders: { de: "mahnungen", fr: "rappels", it: "solleciti" },
  "customers-articles": { de: "kunden-artikel", fr: "clients-articles", it: "clienti-articoli" },
  activity: { de: "aktivitaet", fr: "activite", it: "attivita" },
  settings: { de: "einstellungen", fr: "parametres", it: "impostazioni" },
  "docker-cli": { de: "docker-cli", fr: "docker-cli", it: "docker-cli" },
  "environment-variables": { de: "umgebungsvariablen", fr: "variables-environnement", it: "variabili-ambiente" },
  backups: { de: "backups", fr: "sauvegardes", it: "backup" },
  "demo-mode": { de: "demo-modus", fr: "mode-demo", it: "modalita-demo" },
};

// Reverse lookup per language: localized segment -> canonical segment.
const REVERSE: Record<Lang, Record<string, string>> = (() => {
  const out = {} as Record<Lang, Record<string, string>>;
  for (const l of langs) out[l] = {};
  for (const [canon, map] of Object.entries(SEGMENTS)) {
    for (const l of langs) {
      const seg = l === defaultLang ? canon : (map[l] ?? canon);
      out[l][seg] = canon;
    }
  }
  return out;
})();

/** Translate a canonical path ("/docs/quickstart") to its localized form for a
 *  language ("/doku/schnellstart"). Returns a leading-slash path, no lang prefix. */
export function localizePath(path: string, lang: Lang): string {
  if (path === "/" || lang === defaultLang) return path;
  return "/" + path.split("/").filter(Boolean).map((seg) => SEGMENTS[seg]?.[lang] ?? seg).join("/");
}

/** Reverse a localized path ("/doku/schnellstart") back to canonical ("/docs/quickstart"). */
export function canonicalizePath(path: string, lang: Lang): string {
  if (path === "/" || lang === defaultLang) return path;
  return "/" + path.split("/").filter(Boolean).map((seg) => REVERSE[lang]?.[seg] ?? seg).join("/");
}

/** Every canonical path that needs a localized route generated (home excluded). */
export const LOCALIZED_PATHS = [
  "/about",
  "/features",
  "/pricing",
  "/privacy",
  "/docs",
  "/docs/quickstart",
  "/docs/self-hosting",
  "/docs/configuration",
  "/docs/dashboard",
  "/docs/invoicing",
  "/docs/quotes",
  "/docs/projects",
  "/docs/email",
  "/docs/expenses-income",
  "/docs/payments",
  "/docs/bank-reconciliation",
  "/docs/reminders",
  "/docs/customers-articles",
  "/docs/activity",
  "/docs/settings",
  "/docs/docker-cli",
  "/docs/environment-variables",
  "/docs/backups",
  "/docs/demo-mode",
];
