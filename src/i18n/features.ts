import { defaultLang, type Lang } from "./config";

export interface FeaturesContent {
  meta: { title: string; description: string };
  hero: { headline: string; sub: string };
  lightSection: { eyebrow: string; heading: string; sub: string };
  // `shot` is the screenshot key under /public/screenshots; the page appends
  // `-<lang>.jpg` so each locale shows the app in its own language.
  lightCards: Array<{ shot: string; eyebrow: string; title: string; description: string; tag?: string }>;
  darkSection: { eyebrow: string; heading: string };
  darkCards: Array<{ eyebrow: string; title: string; description: string }>;
}

const features: Partial<Record<Lang, FeaturesContent>> = {
  en: {
    meta: {
      title: "chohle: Features",
      description:
        "Everything chohle does: Swiss QR-bill invoicing, quotes, a sales and purchasing pipeline, client email, bank reconciliation and reminders, in one open-source tool.",
    },
    hero: {
      headline: "Everything chohle does.",
      sub: "From the first quote to the matched payment. Invoicing, your pipeline, client email and your books, all in one open-source tool. Self-host it, or try the hosted demo.",
    },
    lightSection: {
      eyebrow: "Features",
      heading: "One tool for the whole job.",
      sub: "A few highlights to give you the idea, not the whole list. Quotes, reminders, bank import, tax export, the AI assistant and more are covered in depth in the docs.",
    },
    lightCards: [
      {
        shot: "invoice-pdf",
        eyebrow: "Invoicing",
        title: "Swiss QR-bills in seconds",
        description:
          "Build an invoice from reusable line items and chohle gives you a print-ready PDF with a scannable Swiss QR-bill. The 8.1% VAT and 5-rappen rounding are handled for you.",
      },
      {
        shot: "quotes",
        eyebrow: "Quotes",
        title: "From quote to paid invoice",
        description:
          "Send a quote, follow it from draft to accepted, then turn it into an invoice with one click. Drafts, sent, accepted and declined all live in one view.",
      },
      {
        shot: "pipeline",
        eyebrow: "Pipeline",
        title: "See every deal and purchase",
        description:
          "A drag-and-drop board for your sales leads and your purchasing, from first contact to won. Nothing stalls, and you can see which clients are worth your time.",
      },
      {
        shot: "conversations",
        eyebrow: "Client email",
        title: "Conversations in context",
        description:
          "Connect Gmail, Outlook or any IMAP mailbox and keep every client email filed against the project it belongs to. There's no separate inbox to dig through.",
      },
      {
        shot: "banking",
        eyebrow: "Bank reconciliation",
        tag: "Experimental",
        title: "Match payments automatically",
        description:
          "Import a camt.053 statement from your bank and chohle matches incoming payments to open invoices by their QR reference, then marks them paid for you.",
      },
      {
        shot: "reminders",
        eyebrow: "Reminders",
        title: "Chase overdue, politely",
        description:
          "Three reminder levels in the Swiss style: first reminder, second reminder, final notice. Each one carries a fresh invoice PDF and goes out only once the wait window is up.",
      },
      {
        shot: "customers",
        eyebrow: "Customers and articles",
        title: "Clients and reusable items",
        description:
          "Keep customers with their own rates and payment terms, plus a library of reusable articles. Every quote and invoice then builds itself in seconds.",
      },
      {
        shot: "dashboard",
        eyebrow: "Dashboard",
        title: "Your month at a glance",
        description:
          "Income against expenses, what is still outstanding, a six-month trend and your recurring income. The whole business sits on one calm screen.",
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
          "chohle is built to self-host. Spin it up with Docker in a single command and keep everything in-house.",
      },
      {
        eyebrow: "No lock-in",
        title: "Open formats",
        description:
          "Your data lives in a plain SQLite file you can back up or export. Your invoices and clients are always yours to take.",
      },
      {
        eyebrow: "Private",
        title: "Your data stays put",
        description:
          "When you self-host, nothing ever leaves your infrastructure. No third parties, no subscription, no surprises.",
      },
      {
        eyebrow: "Open source",
        title: "Read every line",
        description:
          "The whole codebase is public under the MIT licence. Audit it, extend it, or contribute back. It's yours to shape.",
      },
    ],
  },
  de: {
    meta: {
      title: "chohle: Funktionen",
      description:
        "Alles, was chohle kann: QR-Rechnungen, Offerten, eine Vertriebs- und Einkaufs-Pipeline, Kunden-E-Mail, Bankabgleich und Mahnungen, in einem Open-Source-Tool.",
    },
    hero: {
      headline: "Alles, was chohle kann.",
      sub: "Von der ersten Offerte bis zur abgeglichenen Zahlung. Rechnungen, deine Pipeline, Kunden-E-Mail und deine Buchhaltung, alles in einem Open-Source-Tool. Selbst hosten oder die gehostete Demo testen.",
    },
    lightSection: {
      eyebrow: "Funktionen",
      heading: "Ein Tool für die ganze Arbeit.",
      sub: "Ein paar Highlights, damit du ein Bild bekommst, nicht die ganze Liste. Offerten, Mahnungen, Bankimport, Steuerexport, der KI-Assistent und mehr sind in der Doku ausführlich beschrieben.",
    },
    lightCards: [
      {
        shot: "invoice-pdf",
        eyebrow: "Rechnungen",
        title: "Schweizer QR-Rechnungen in Sekunden",
        description:
          "Stell eine Rechnung aus wiederverwendbaren Positionen zusammen, und chohle erzeugt ein druckfertiges PDF mit scanbarer QR-Rechnung. Die 8.1% MWST und die 5-Rappen-Rundung erledigt chohle für dich.",
      },
      {
        shot: "quotes",
        eyebrow: "Offerten",
        title: "Von der Offerte zur bezahlten Rechnung",
        description:
          "Verschick eine Offerte, verfolg sie von Entwurf bis angenommen und wandle sie mit einem Klick in eine Rechnung um. Entwürfe, versendet, angenommen und abgelehnt liegen in einer Ansicht.",
      },
      {
        shot: "pipeline",
        eyebrow: "Pipeline",
        title: "Jeder Deal und jeder Einkauf im Blick",
        description:
          "Ein Drag-and-Drop-Board für Vertriebs-Leads und Einkauf, vom Erstkontakt bis gewonnen. Nichts bleibt liegen, und du siehst, welche Kunden sich lohnen.",
      },
      {
        shot: "conversations",
        eyebrow: "Kunden-E-Mail",
        title: "Konversationen im Kontext",
        description:
          "Verbinde Gmail, Outlook oder ein beliebiges IMAP-Postfach und halte jede Kunden-E-Mail beim richtigen Projekt. Kein separater Posteingang mehr zum Durchwühlen.",
      },
      {
        shot: "banking",
        eyebrow: "Bankabgleich",
        tag: "Experimentell",
        title: "Zahlungen automatisch zuordnen",
        description:
          "Importier ein camt.053 deiner Bank, und chohle ordnet eingehende Zahlungen über die QR-Referenz den offenen Rechnungen zu und markiert sie als bezahlt.",
      },
      {
        shot: "reminders",
        eyebrow: "Mahnungen",
        title: "Überfälliges freundlich nachfassen",
        description:
          "Drei Mahnstufen nach Schweizer Art: 1. Mahnung, 2. Mahnung, letzte Mahnung. Jede bringt ein frisches Rechnungs-PDF mit und geht erst raus, wenn das Wartefenster abgelaufen ist.",
      },
      {
        shot: "customers",
        eyebrow: "Kunden und Artikel",
        title: "Kunden und wiederverwendbare Positionen",
        description:
          "Führ Kunden mit eigenen Ansätzen und Zahlungsfristen, dazu eine Bibliothek wiederverwendbarer Artikel. Jede Offerte und Rechnung baut sich dann in Sekunden von selbst.",
      },
      {
        shot: "dashboard",
        eyebrow: "Dashboard",
        title: "Dein Monat auf einen Blick",
        description:
          "Einnahmen gegen Ausgaben, was noch aussteht, ein Trend über sechs Monate und deine wiederkehrenden Einnahmen. Das ganze Geschäft auf einem ruhigen Bildschirm.",
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
          "chohle ist fürs Self-Hosting gebaut. Starte es mit Docker in einem einzigen Befehl und behalte alles im Haus.",
      },
      {
        eyebrow: "Kein Lock-in",
        title: "Offene Formate",
        description:
          "Deine Daten liegen in einer einfachen SQLite-Datei, die du sichern oder exportieren kannst. Deine Rechnungen und Kunden gehören immer dir.",
      },
      {
        eyebrow: "Privat",
        title: "Deine Daten bleiben, wo sie sind",
        description:
          "Wenn du selbst hostest, verlässt nichts je deine Infrastruktur. Keine Dritten, kein Abo, keine Überraschungen.",
      },
      {
        eyebrow: "Open Source",
        title: "Jede Zeile lesbar",
        description:
          "Der gesamte Code ist unter der MIT-Lizenz öffentlich. Prüf ihn, erweitere ihn oder trag etwas bei. Du kannst ihn mitgestalten.",
      },
    ],
  },
  fr: {
    meta: {
      title: "chohle: Fonctionnalités",
      description:
        "Tout ce que fait chohle : QR-factures, devis, un pipeline de ventes et d'achats, e-mail clients, rapprochement bancaire et rappels, dans un seul outil open source.",
    },
    hero: {
      headline: "Tout ce que fait chohle.",
      sub: "Du premier devis au paiement rapproché. La facturation, votre pipeline, l'e-mail clients et votre comptabilité, le tout dans un seul outil open source. Auto-hébergez-le, ou essayez la démo en ligne.",
    },
    lightSection: {
      eyebrow: "Fonctionnalités",
      heading: "Un seul outil pour tout le travail.",
      sub: "Quelques points forts pour donner une idée, pas la liste complète. Devis, rappels, import bancaire, export fiscal, assistant IA et plus encore sont détaillés dans la documentation.",
    },
    lightCards: [
      {
        shot: "invoice-pdf",
        eyebrow: "Facturation",
        title: "QR-factures suisses en quelques secondes",
        description:
          "Composez une facture à partir d'articles réutilisables et chohle produit un PDF prêt à imprimer avec une QR-facture suisse scannable. La TVA à 8,1% et l'arrondi aux 5 centimes sont gérés pour vous.",
      },
      {
        shot: "quotes",
        eyebrow: "Devis",
        title: "Du devis à la facture payée",
        description:
          "Envoyez un devis, suivez-le du brouillon à l'acceptation, puis convertissez-le en facture d'un seul clic. Brouillons, envoyés, acceptés et refusés vivent dans une seule vue.",
      },
      {
        shot: "pipeline",
        eyebrow: "Pipeline",
        title: "Chaque affaire et chaque achat en vue",
        description:
          "Un tableau glisser-déposer pour vos prospects et vos achats, du premier contact à la signature. Rien ne traîne, et vous voyez quels clients en valent la peine.",
      },
      {
        shot: "conversations",
        eyebrow: "E-mail clients",
        title: "Des conversations en contexte",
        description:
          "Connectez Gmail, Outlook ou n'importe quelle boîte IMAP et gardez chaque e-mail client classé sous le bon projet. Plus de boîte de réception séparée à fouiller.",
      },
      {
        shot: "banking",
        eyebrow: "Rapprochement bancaire",
        tag: "Expérimental",
        title: "Rapprochez les paiements automatiquement",
        description:
          "Importez un relevé camt.053 de votre banque et chohle rapproche les paiements entrants des factures ouvertes via la référence QR, puis les marque comme payées.",
      },
      {
        shot: "reminders",
        eyebrow: "Rappels",
        title: "Relancez les retards, poliment",
        description:
          "Trois niveaux de relance à la suisse : 1er rappel, 2e rappel, dernier rappel. Chacun porte un nouveau PDF de facture et part seulement une fois le délai d'attente écoulé.",
      },
      {
        shot: "customers",
        eyebrow: "Clients et articles",
        title: "Clients et articles réutilisables",
        description:
          "Gérez vos clients avec leurs propres tarifs et délais de paiement, plus une bibliothèque d'articles réutilisables. Chaque devis et facture se construit alors en quelques secondes.",
      },
      {
        shot: "dashboard",
        eyebrow: "Tableau de bord",
        title: "Votre mois en un coup d'œil",
        description:
          "Revenus contre dépenses, ce qui reste dû, une tendance sur six mois et vos revenus récurrents. Toute l'activité tient sur un écran serein.",
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
          "chohle est conçu pour l'auto-hébergement. Lancez-le avec Docker en une seule commande et gardez tout en interne.",
      },
      {
        eyebrow: "Sans verrouillage",
        title: "Formats ouverts",
        description:
          "Vos données vivent dans un simple fichier SQLite que vous pouvez sauvegarder ou exporter. Vos factures et vos clients vous appartiennent toujours.",
      },
      {
        eyebrow: "Privé",
        title: "Vos données restent en place",
        description:
          "Lorsque vous auto-hébergez, rien ne quitte jamais votre infrastructure. Aucun tiers, aucun abonnement, aucune surprise.",
      },
      {
        eyebrow: "Open source",
        title: "Lisez chaque ligne",
        description:
          "Tout le code est public sous licence MIT. Auditez-le, étendez-le ou contribuez. C'est à vous de le façonner.",
      },
    ],
  },
  it: {
    meta: {
      title: "chohle: Funzionalità",
      description:
        "Tutto ciò che fa chohle: QR-fatture, preventivi, una pipeline di vendita e acquisti, e-mail dei clienti, riconciliazione bancaria e solleciti, in un unico strumento open source.",
    },
    hero: {
      headline: "Tutto ciò che fa chohle.",
      sub: "Dal primo preventivo al pagamento riconciliato. La fatturazione, la tua pipeline, l'e-mail dei clienti e la tua contabilità, tutto in un unico strumento open source. Ospitalo da te, o prova la demo ospitata.",
    },
    lightSection: {
      eyebrow: "Funzionalità",
      heading: "Un solo strumento per tutto il lavoro.",
      sub: "Alcuni punti salienti per farsi un'idea, non l'elenco completo. Offerte, solleciti, import bancario, export fiscale, assistente IA e altro sono descritti in dettaglio nella documentazione.",
    },
    lightCards: [
      {
        shot: "invoice-pdf",
        eyebrow: "Fatturazione",
        title: "QR-fatture svizzere in pochi secondi",
        description:
          "Componi una fattura da voci riutilizzabili e chohle genera un PDF pronto per la stampa con una QR-fattura svizzera scansionabile. L'IVA all'8,1% e l'arrotondamento ai 5 centesimi sono gestiti per te.",
      },
      {
        shot: "quotes",
        eyebrow: "Preventivi",
        title: "Dal preventivo alla fattura pagata",
        description:
          "Invia un preventivo, seguilo dalla bozza all'accettazione, poi convertilo in fattura con un clic. Bozze, inviati, accettati e rifiutati vivono in un'unica vista.",
      },
      {
        shot: "pipeline",
        eyebrow: "Pipeline",
        title: "Ogni trattativa e ogni acquisto a vista",
        description:
          "Una lavagna drag-and-drop per le opportunità di vendita e gli acquisti, dal primo contatto alla chiusura. Nulla si blocca, e vedi quali clienti valgono la pena.",
      },
      {
        shot: "conversations",
        eyebrow: "E-mail dei clienti",
        title: "Conversazioni nel contesto",
        description:
          "Collega Gmail, Outlook o qualsiasi casella IMAP e tieni ogni e-mail del cliente archiviata sotto il progetto giusto. Niente più casella separata da setacciare.",
      },
      {
        shot: "banking",
        eyebrow: "Riconciliazione bancaria",
        tag: "Sperimentale",
        title: "Abbina i pagamenti automaticamente",
        description:
          "Importa un estratto camt.053 della tua banca e chohle abbina i pagamenti in entrata alle fatture aperte tramite il riferimento QR, poi le segna come pagate.",
      },
      {
        shot: "reminders",
        eyebrow: "Solleciti",
        title: "Sollecita gli scaduti, con garbo",
        description:
          "Tre livelli di sollecito all'uso svizzero: 1° sollecito, 2° sollecito, ultimo sollecito. Ciascuno porta un nuovo PDF della fattura e parte solo una volta scaduta la finestra di attesa.",
      },
      {
        shot: "customers",
        eyebrow: "Clienti e articoli",
        title: "Clienti e voci riutilizzabili",
        description:
          "Gestisci i clienti con tariffe e termini di pagamento propri, più una libreria di articoli riutilizzabili. Ogni preventivo e fattura si costruisce poi in pochi secondi.",
      },
      {
        shot: "dashboard",
        eyebrow: "Dashboard",
        title: "Il tuo mese in un colpo d'occhio",
        description:
          "Entrate contro uscite, ciò che resta da incassare, un andamento a sei mesi e le tue entrate ricorrenti. Tutta l'attività su una schermata serena.",
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
          "chohle è progettato per il self-hosting. Avvialo con Docker con un solo comando e tieni tutto in casa.",
      },
      {
        eyebrow: "Nessun lock-in",
        title: "Formati aperti",
        description:
          "I tuoi dati vivono in un semplice file SQLite che puoi salvare o esportare. Le tue fatture e i tuoi clienti restano sempre tuoi.",
      },
      {
        eyebrow: "Privato",
        title: "I tuoi dati restano dove sono",
        description:
          "Quando fai self-hosting, nulla lascia mai la tua infrastruttura. Nessun terzo, nessun abbonamento, nessuna sorpresa.",
      },
      {
        eyebrow: "Open source",
        title: "Leggi ogni riga",
        description:
          "L'intero codice è pubblico sotto licenza MIT. Verificalo, estendilo o contribuisci. Sta a te plasmarlo.",
      },
    ],
  },
};

export function getFeatures(lang: Lang): FeaturesContent {
  return features[lang] ?? features[defaultLang]!;
}
