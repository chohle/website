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
  {
    id: "features",
    slugs: [
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
    ],
  },
  { id: "reference", slugs: ["/docs/settings", "/docs/docker-cli", "/docs/environment-variables", "/docs/backups"] },
];

const groupTitles: Record<string, Record<Lang, string>> = {
  "getting-started": { en: "Getting started", de: "Erste Schritte", fr: "Premiers pas", it: "Per iniziare" },
  features: { en: "Features", de: "Funktionen", fr: "Fonctionnalités", it: "Funzionalità" },
  reference: { en: "Reference", de: "Referenz", fr: "Référence", it: "Riferimento" },
};

const linkTitles: Record<string, Record<Lang, string>> = {
  "/docs": { en: "Introduction", de: "Einführung", fr: "Introduction", it: "Introduzione" },
  "/docs/dashboard": { en: "Dashboard", de: "Dashboard", fr: "Tableau de bord", it: "Dashboard" },
  "/docs/payments": { en: "Payments", de: "Zahlungen", fr: "Paiements", it: "Pagamenti" },
  "/docs/activity": { en: "Activity", de: "Aktivität", fr: "Activité", it: "Attività" },
  "/docs/quickstart": { en: "Quick start", de: "Schnellstart", fr: "Démarrage rapide", it: "Avvio rapido" },
  "/docs/self-hosting": { en: "Self-hosting", de: "Self-Hosting", fr: "Auto-hébergement", it: "Self-hosting" },
  "/docs/configuration": { en: "Configuration", de: "Konfiguration", fr: "Configuration", it: "Configurazione" },
  "/docs/invoicing": { en: "Invoicing", de: "Rechnungen", fr: "Facturation", it: "Fatturazione" },
  "/docs/quotes": { en: "Quotes", de: "Offerten", fr: "Devis", it: "Preventivi" },
  "/docs/projects": { en: "Projects & pipeline", de: "Projekte & Pipeline", fr: "Projets & pipeline", it: "Progetti & pipeline" },
  "/docs/email": { en: "Client email", de: "Kunden-E-Mail", fr: "E-mail clients", it: "E-mail dei clienti" },
  "/docs/expenses-income": { en: "Expenses & income", de: "Ausgaben & Einnahmen", fr: "Dépenses & revenus", it: "Uscite & entrate" },
  "/docs/bank-reconciliation": { en: "Bank reconciliation", de: "Bankabgleich", fr: "Rapprochement bancaire", it: "Riconciliazione bancaria" },
  "/docs/reminders": { en: "Reminders", de: "Mahnungen", fr: "Rappels", it: "Solleciti" },
  "/docs/customers-articles": { en: "Customers & articles", de: "Kunden & Artikel", fr: "Clients & articles", it: "Clienti & articoli" },
  "/docs/settings": { en: "Settings", de: "Einstellungen", fr: "Paramètres", it: "Impostazioni" },
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
