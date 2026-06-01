import { defaultLang, type Lang } from "./config";

export interface FeaturesContent {
  meta: { title: string; description: string };
  hero: { headline: string; sub: string };
  lightSection: { eyebrow: string; heading: string };
  lightCards: Array<{ eyebrow: string; title: string; description: string }>;
  darkSection: { eyebrow: string; heading: string };
  darkCards: Array<{ eyebrow: string; title: string; description: string }>;
}

const features: Partial<Record<Lang, FeaturesContent>> = {
  en: {
    meta: {
      title: "batze — Features",
      description:
        "Everything batze does: Swiss-ready invoicing, project & time tracking, and client email — in one open-source tool.",
    },
    hero: {
      headline: "Everything batze does.",
      sub: "Invoicing, projects, and client email — in one open-source tool. Self-host it, or try the hosted demo.",
    },
    lightSection: {
      eyebrow: "Features",
      heading: "One tool for the whole job.",
    },
    lightCards: [
      {
        eyebrow: "Invoicing",
        title: "Get paid faster",
        description:
          "Create a Swiss QR-bill in seconds, send it, and let batze track what's paid and gently chase what's overdue.",
      },
      {
        eyebrow: "Projects",
        title: "Know where time goes",
        description:
          "Group work into projects, log your hours, and turn billable time straight into a draft invoice.",
      },
      {
        eyebrow: "Email",
        title: "Conversations in context",
        description:
          "Read and reply to client email without leaving batze — filed against the right project.",
      },
      {
        eyebrow: "Time tracking",
        title: "One-click timers",
        description:
          "Track hours as you work, or fill them in later. Either way it lands on the invoice.",
      },
      {
        eyebrow: "Swiss-ready",
        title: "QR-bills & VAT",
        description:
          "Invoices that match the Swiss QR-bill standard, with VAT handled the way Switzerland expects.",
      },
    ],
    darkSection: {
      eyebrow: "Open by design",
      heading: "Yours to run, end to end.",
    },
    darkCards: [
      {
        eyebrow: "Self-hostable",
        title: "Run it on your own server",
        description:
          "batze is built to self-host. Spin it up with a single command and keep everything in-house.",
      },
      {
        eyebrow: "No lock-in",
        title: "Open formats",
        description:
          "Full CSV exports and open data — your invoices and clients are always yours to take.",
      },
      {
        eyebrow: "Private",
        title: "Your data stays put",
        description:
          "When you self-host, nothing ever leaves your infrastructure. No third parties, no surprises.",
      },
      {
        eyebrow: "Open source",
        title: "Read every line",
        description:
          "The whole codebase is public. Audit it, extend it, or contribute back — it's yours to shape.",
      },
    ],
  },
  de: {
    meta: {
      title: "batze — Funktionen",
      description:
        "Alles, was batze kann: Schweiz-taugliche Rechnungsstellung, Projekt- & Zeiterfassung und Kunden-E-Mail — in einem Open-Source-Tool.",
    },
    hero: {
      headline: "Alles, was batze kann.",
      sub: "Rechnungen, Projekte und Kunden-E-Mail — in einem Open-Source-Tool. Selbst hosten oder die gehostete Demo testen.",
    },
    lightSection: {
      eyebrow: "Funktionen",
      heading: "Ein Tool für die ganze Arbeit.",
    },
    lightCards: [
      {
        eyebrow: "Rechnungen",
        title: "Schneller bezahlt werden",
        description:
          "Erstelle in Sekunden eine Schweizer QR-Rechnung, verschicke sie und lass batze verfolgen, was bezahlt ist, und überfällige Beträge dezent nachfassen.",
      },
      {
        eyebrow: "Projekte",
        title: "Wissen, wohin die Zeit fliesst",
        description:
          "Fasse die Arbeit in Projekten zusammen, erfasse deine Stunden und verwandle verrechenbare Zeit direkt in eine Rechnungsvorlage.",
      },
      {
        eyebrow: "E-Mail",
        title: "Konversationen im Kontext",
        description:
          "Lies und beantworte Kunden-E-Mails, ohne batze zu verlassen — abgelegt beim richtigen Projekt.",
      },
      {
        eyebrow: "Zeiterfassung",
        title: "Timer mit einem Klick",
        description:
          "Erfasse Stunden während der Arbeit oder trage sie später nach. So oder so landen sie auf der Rechnung.",
      },
      {
        eyebrow: "Schweiz-tauglich",
        title: "QR-Rechnungen & MWST",
        description:
          "Rechnungen nach dem Schweizer QR-Rechnungs-Standard, mit MWST so behandelt, wie es die Schweiz erwartet.",
      },
    ],
    darkSection: {
      eyebrow: "Offen by design",
      heading: "Deins, von Anfang bis Ende.",
    },
    darkCards: [
      {
        eyebrow: "Self-hostable",
        title: "Auf deinem eigenen Server betreiben",
        description:
          "batze ist fürs Self-Hosting gebaut. Starte es mit einem einzigen Befehl und behalte alles im Haus.",
      },
      {
        eyebrow: "Kein Lock-in",
        title: "Offene Formate",
        description:
          "Vollständige CSV-Exporte und offene Daten — deine Rechnungen und Kunden gehören immer dir.",
      },
      {
        eyebrow: "Privat",
        title: "Deine Daten bleiben, wo sie sind",
        description:
          "Wenn du selbst hostest, verlässt nichts je deine Infrastruktur. Keine Dritten, keine Überraschungen.",
      },
      {
        eyebrow: "Open Source",
        title: "Jede Zeile lesbar",
        description:
          "Der gesamte Code ist öffentlich. Prüfe ihn, erweitere ihn oder trag etwas bei — du kannst ihn mitgestalten.",
      },
    ],
  },
  fr: {
    meta: {
      title: "batze — Fonctionnalités",
      description:
        "Tout ce que fait batze : facturation prête pour la Suisse, suivi des projets & du temps, et e-mail clients — dans un seul outil open source.",
    },
    hero: {
      headline: "Tout ce que fait batze.",
      sub: "Facturation, projets et e-mail clients — dans un seul outil open source. Auto-hébergez-le, ou essayez la démo en ligne.",
    },
    lightSection: {
      eyebrow: "Fonctionnalités",
      heading: "Un seul outil pour tout le travail.",
    },
    lightCards: [
      {
        eyebrow: "Facturation",
        title: "Soyez payé plus vite",
        description:
          "Créez une QR-facture suisse en quelques secondes, envoyez-la, et laissez batze suivre ce qui est payé et relancer en douceur ce qui est en retard.",
      },
      {
        eyebrow: "Projets",
        title: "Sachez où passe le temps",
        description:
          "Regroupez le travail en projets, enregistrez vos heures et transformez le temps facturable directement en brouillon de facture.",
      },
      {
        eyebrow: "E-mail",
        title: "Des conversations en contexte",
        description:
          "Lisez et répondez aux e-mails clients sans quitter batze — classés sous le bon projet.",
      },
      {
        eyebrow: "Suivi du temps",
        title: "Minuteurs en un clic",
        description:
          "Suivez vos heures au fil du travail, ou complétez-les plus tard. Dans tous les cas, elles arrivent sur la facture.",
      },
      {
        eyebrow: "Prêt pour la Suisse",
        title: "QR-factures & TVA",
        description:
          "Des factures conformes au standard suisse de la QR-facture, avec la TVA gérée comme la Suisse l'attend.",
      },
    ],
    darkSection: {
      eyebrow: "Ouvert par conception",
      heading: "À vous de le faire tourner, de bout en bout.",
    },
    darkCards: [
      {
        eyebrow: "Auto-hébergeable",
        title: "Faites-le tourner sur votre propre serveur",
        description:
          "batze est conçu pour l'auto-hébergement. Lancez-le avec une seule commande et gardez tout en interne.",
      },
      {
        eyebrow: "Sans verrouillage",
        title: "Formats ouverts",
        description:
          "Exports CSV complets et données ouvertes — vos factures et vos clients vous appartiennent toujours.",
      },
      {
        eyebrow: "Privé",
        title: "Vos données restent en place",
        description:
          "Lorsque vous auto-hébergez, rien ne quitte jamais votre infrastructure. Aucun tiers, aucune surprise.",
      },
      {
        eyebrow: "Open source",
        title: "Lisez chaque ligne",
        description:
          "Tout le code est public. Auditez-le, étendez-le ou contribuez — c'est à vous de le façonner.",
      },
    ],
  },
  it: {
    meta: {
      title: "batze — Funzionalità",
      description:
        "Tutto ciò che fa batze: fatturazione pronta per la Svizzera, gestione di progetti e tempo, ed e-mail dei clienti — in un unico strumento open source.",
    },
    hero: {
      headline: "Tutto ciò che fa batze.",
      sub: "Fatturazione, progetti ed e-mail dei clienti — in un unico strumento open source. Ospitalo da te, o prova la demo ospitata.",
    },
    lightSection: {
      eyebrow: "Funzionalità",
      heading: "Un solo strumento per tutto il lavoro.",
    },
    lightCards: [
      {
        eyebrow: "Fatturazione",
        title: "Fatti pagare più in fretta",
        description:
          "Crea una QR-fattura svizzera in pochi secondi, inviala e lascia che batze tenga traccia di ciò che è pagato e solleciti con discrezione gli importi scaduti.",
      },
      {
        eyebrow: "Progetti",
        title: "Scopri dove va il tempo",
        description:
          "Raggruppa il lavoro in progetti, registra le tue ore e trasforma il tempo fatturabile direttamente in una bozza di fattura.",
      },
      {
        eyebrow: "E-mail",
        title: "Conversazioni nel contesto",
        description:
          "Leggi e rispondi alle e-mail dei clienti senza uscire da batze — archiviate sotto il progetto giusto.",
      },
      {
        eyebrow: "Monitoraggio del tempo",
        title: "Timer con un clic",
        description:
          "Registra le ore mentre lavori, o inseriscile più tardi. In entrambi i casi finiscono sulla fattura.",
      },
      {
        eyebrow: "Pronto per la Svizzera",
        title: "QR-fatture e IVA",
        description:
          "Fatture conformi allo standard svizzero della QR-fattura, con l'IVA gestita come la Svizzera si aspetta.",
      },
    ],
    darkSection: {
      eyebrow: "Aperto per scelta",
      heading: "Tuo da gestire, dall'inizio alla fine.",
    },
    darkCards: [
      {
        eyebrow: "Self-hosting",
        title: "Eseguilo sul tuo server",
        description:
          "batze è progettato per il self-hosting. Avvialo con un solo comando e tieni tutto in casa.",
      },
      {
        eyebrow: "Nessun lock-in",
        title: "Formati aperti",
        description:
          "Esportazioni CSV complete e dati aperti — le tue fatture e i tuoi clienti restano sempre tuoi.",
      },
      {
        eyebrow: "Privato",
        title: "I tuoi dati restano dove sono",
        description:
          "Quando fai self-hosting, nulla lascia mai la tua infrastruttura. Nessun terzo, nessuna sorpresa.",
      },
      {
        eyebrow: "Open source",
        title: "Leggi ogni riga",
        description:
          "L'intero codice è pubblico. Verificalo, estendilo o contribuisci — sta a te plasmarlo.",
      },
    ],
  },
};

export function getFeatures(lang: Lang): FeaturesContent {
  return features[lang] ?? features[defaultLang]!;
}
