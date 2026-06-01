import { localize } from "../i18n/utils";
import type { Lang } from "../i18n/config";

export interface DocsLink {
  title: string;
  href: string; // localized
  slug: string; // canonical (e.g. "/docs/quickstart")
}
export interface DocsGroup {
  title: string;
  links: DocsLink[];
}

const structure: { id: string; slugs: string[] }[] = [
  { id: "getting-started", slugs: ["/docs", "/docs/quickstart", "/docs/self-hosting", "/docs/configuration"] },
  { id: "guides", slugs: ["/docs/invoicing", "/docs/projects", "/docs/email"] },
  { id: "reference", slugs: ["/docs/docker-cli", "/docs/environment-variables", "/docs/backups"] },
];

const groupTitles: Record<string, Record<Lang, string>> = {
  "getting-started": { en: "Getting started", de: "Erste Schritte", fr: "Premiers pas", it: "Per iniziare" },
  guides: { en: "Guides", de: "Anleitungen", fr: "Guides", it: "Guide" },
  reference: { en: "Reference", de: "Referenz", fr: "Référence", it: "Riferimento" },
};

const linkTitles: Record<string, Record<Lang, string>> = {
  "/docs": { en: "Introduction", de: "Einführung", fr: "Introduction", it: "Introduzione" },
  "/docs/quickstart": { en: "Quick start", de: "Schnellstart", fr: "Démarrage rapide", it: "Avvio rapido" },
  "/docs/self-hosting": { en: "Self-hosting", de: "Self-Hosting", fr: "Auto-hébergement", it: "Self-hosting" },
  "/docs/configuration": { en: "Configuration", de: "Konfiguration", fr: "Configuration", it: "Configurazione" },
  "/docs/invoicing": { en: "Invoicing", de: "Rechnungen", fr: "Facturation", it: "Fatturazione" },
  "/docs/projects": { en: "Projects", de: "Projekte", fr: "Projets", it: "Progetti" },
  "/docs/email": { en: "Client email", de: "Kunden-E-Mail", fr: "E-mail clients", it: "E-mail dei clienti" },
  "/docs/docker-cli": { en: "Docker & CLI", de: "Docker & CLI", fr: "Docker & CLI", it: "Docker & CLI" },
  "/docs/environment-variables": { en: "Environment variables", de: "Umgebungsvariablen", fr: "Variables d'environnement", it: "Variabili d'ambiente" },
  "/docs/backups": { en: "Backups", de: "Backups", fr: "Sauvegardes", it: "Backup" },
};

export function getDocsNav(lang: Lang): DocsGroup[] {
  return structure.map((g) => ({
    title: groupTitles[g.id][lang],
    links: g.slugs.map((slug) => ({ slug, title: linkTitles[slug][lang], href: localize(slug, lang) })),
  }));
}

export function getDocsFlat(lang: Lang): DocsLink[] {
  return getDocsNav(lang).flatMap((g) => g.links);
}
