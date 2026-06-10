import { defaultLang, type Lang } from "./config";

export interface HomeContent {
  meta: { title: string; description: string };
  hero: { headline: string; sub: string; keywords: string[] };
  features: { headline: string; sub: string; items: { title: string; body: string }[] };
  why: { heading: string; body: string; items: { tag: string; title: string; desc: string }[] };
  pricing: { headline: string; body: string };
  faqsTitle: string;
  faqsSub: string;
  faqs: { q: string; a: string }[];
}

const home: Partial<Record<Lang, HomeContent>> = {
  en: {
    meta: {
      title: "chohle: invoicing, projects and email in one place",
      description: "chohle brings billing, your project pipeline and client email together for Swiss freelancers and small teams. Open source and free to try.",
    },
    hero: {
      headline: 'Invoicing, projects and email in one <span class="text-accent dark:text-accent-light">calm</span> place.',
      sub: "chohle brings billing, your project pipeline and client email together for Swiss freelancers and small teams. Open source and free to try, with no account required.",
      keywords: ["Swiss QR-bills", "VAT", "Invoicing", "Quotes", "Projects & pipeline", "Client email", "Payments", "Reminders", "Open source", "Self-hosted", "AI assistant"],
    },
    features: {
      headline: "From the first quote to the final payment.",
      sub: "Most tools make you stitch invoicing, projects and email together yourself. chohle keeps all three in one calm place, so nothing falls through the cracks.",
      items: [
        { title: "Invoicing", body: "Create a Swiss QR-bill in seconds and send it. chohle then tracks what is paid and gently chases what is overdue." },
        { title: "Pipeline", body: "Track every deal and purchase on a drag-and-drop board, from first contact to won. Nothing stalls, and you can see which clients are worth your time." },
        { title: "Email", body: "Keep client conversations right next to the work they are about. There is no separate inbox to dig through." },
      ],
    },
    why: {
      heading: "Built to stay out of your way.",
      body: "chohle gets the boring fundamentals right: open source, Swiss-ready and yours to run, so your data stays with you and you can get back to the work that actually pays.",
      items: [
        { tag: "Swiss-ready", title: "QR-bills and VAT, done right", desc: "Invoices follow the Swiss QR-bill standard and handle VAT the way Switzerland expects, right out of the box." },
        { tag: "Self-hostable", title: "Run it on your own server", desc: "Spin it up with Docker in a single command and keep everything in-house. Nothing ever leaves your infrastructure." },
        { tag: "No lock-in", title: "Open formats", desc: "Your data lives in a plain SQLite file you can back up or export. Your invoices and clients are always yours to take." },
        { tag: "Open source", title: "Read every line", desc: "The whole codebase is public under the MIT licence. Audit it, extend it, or contribute back. It's yours to shape." },
      ],
    },
    pricing: {
      headline: "Simple pricing, open by default.",
      body: "Free forever if you self-host. A hosted plan for when you would rather not run a server yourself.",
    },
    faqsTitle: "Questions and answers",
    faqsSub: "Everything worth knowing before you try chohle. Can't find your answer? The docs go deeper.",
    faqs: [
      { q: "Is chohle really free?", a: "Yes. chohle is open source, so you can self-host it for free, for as long as you like. We also offer a paid hosted plan for people who would rather not run a server themselves." },
      { q: "Can I self-host it?", a: "Absolutely. chohle is built to run on your own server, and the self-hosting guide walks you through it. Your data never has to leave your infrastructure." },
      { q: "Does it do Swiss QR-bills?", a: "Yes. chohle generates invoices with a QR-bill that follows the Swiss QR-bill standard, ready for your clients to scan and pay." },
      { q: "Who owns my data?", a: "You do. When you self-host, your data stays entirely on your server. On the hosted plan it is still yours, and you can export everything at any time." },
      { q: "Does it have an AI assistant?", a: "Optionally, yes. You can connect a local LLM you host yourself and ask it to look things up or draft customers and invoices in plain language. You approve every change before anything is saved, and the docs explain how to set it up." },
      { q: "How mature is chohle?", a: "It is an honest work in progress: a side project built in the open, partly with the help of local LLMs. It works day to day, but there are rough edges and bugs still to find. If you spot something off, please open an issue on GitHub; a friendly note goes a long way." },
    ],
  },
  de: {
    meta: {
      title: "chohle: Rechnungen, Projekte und E-Mails an einem Ort",
      description: "chohle vereint Rechnungsstellung, Projekt-Pipeline und Kunden-E-Mails für Schweizer Freelancer und kleine Teams. Open Source und kostenlos zum Ausprobieren.",
    },
    hero: {
      headline: 'Rechnungen, Projekte und E-Mails an einem <span class="text-accent dark:text-accent-light">ruhigen</span> Ort.',
      sub: "chohle vereint Rechnungsstellung, Projekt-Pipeline und Kunden-E-Mails für Schweizer Freelancer und kleine Teams. Open Source und kostenlos zum Ausprobieren, ganz ohne Konto.",
      keywords: ["Schweizer QR-Rechnungen", "MWST", "Rechnungen", "Offerten", "Projekte & Pipeline", "Kunden-E-Mail", "Zahlungen", "Mahnungen", "Open Source", "Self-hosted", "KI-Assistent"],
    },
    features: {
      headline: "Von der ersten Offerte bis zur letzten Zahlung.",
      sub: "Die meisten Tools zwingen dich, Rechnungen, Projekte und E-Mails mühsam selbst zu verbinden. chohle hält alle drei an einem ruhigen Ort zusammen, damit nichts untergeht.",
      items: [
        { title: "Rechnungen", body: "Erstelle in Sekunden eine Schweizer QR-Rechnung und verschicke sie. chohle behält im Blick, was bezahlt ist, und mahnt freundlich, was überfällig ist." },
        { title: "Pipeline", body: "Verfolge jeden Deal und jeden Einkauf auf einem Drag-and-Drop-Board, vom Erstkontakt bis gewonnen. Nichts bleibt liegen, und du siehst, welche Kunden sich lohnen." },
        { title: "E-Mail", body: "Halte Kundengespräche direkt bei der Arbeit, um die es geht. Kein Wühlen mehr in einem separaten Postfach." },
      ],
    },
    why: {
      heading: "Entwickelt, um dir nicht im Weg zu stehen.",
      body: "chohle macht die langweiligen Grundlagen richtig: Open Source, Schweiz-tauglich und selbst betreibbar, damit deine Daten bei dir bleiben und du zurück zur Arbeit kannst, die wirklich Geld bringt.",
      items: [
        { tag: "Schweiz-tauglich", title: "QR-Rechnungen und MWST, richtig gemacht", desc: "Rechnungen folgen dem Schweizer QR-Rechnungs-Standard und behandeln die MWST so, wie es die Schweiz erwartet, von Anfang an." },
        { tag: "Selbst hostbar", title: "Auf deinem eigenen Server", desc: "Starte es mit Docker in einem einzigen Befehl und behalte alles im Haus. Nichts verlässt je deine Infrastruktur." },
        { tag: "Kein Lock-in", title: "Offene Formate", desc: "Deine Daten liegen in einer einfachen SQLite-Datei, die du sichern oder exportieren kannst. Deine Rechnungen und Kunden gehören immer dir." },
        { tag: "Open Source", title: "Lies jede Zeile", desc: "Der gesamte Code ist öffentlich unter der MIT-Lizenz. Prüfe ihn, erweitere ihn oder trag etwas bei. Er gehört dir zum Gestalten." },
      ],
    },
    pricing: {
      headline: "Einfache Preise, offen von Haus aus.",
      body: "Für immer kostenlos, wenn du selbst hostest. Ein gehosteter Plan, wenn du keinen Server betreiben möchtest.",
    },
    faqsTitle: "Fragen und Antworten",
    faqsSub: "Alles Wissenswerte, bevor du chohle ausprobierst. Nichts gefunden? Die Doku geht tiefer.",
    faqs: [
      { q: "Ist chohle wirklich kostenlos?", a: "Ja. chohle ist Open Source, hoste es kostenlos, so lange du möchtest. Es gibt zusätzlich einen kostenpflichtigen gehosteten Plan für alle, die keinen eigenen Server betreiben wollen." },
      { q: "Kann ich es selbst hosten?", a: "Auf jeden Fall. chohle ist dafür gebaut, auf deinem eigenen Server zu laufen, und die Self-Hosting-Anleitung führt dich Schritt für Schritt durch. Deine Daten müssen deine Infrastruktur nie verlassen." },
      { q: "Kann es Schweizer QR-Rechnungen?", a: "Ja. chohle erstellt Rechnungen mit einer QR-Rechnung nach dem Schweizer QR-Rechnungs-Standard, bereit zum Scannen und Bezahlen für deine Kunden." },
      { q: "Wem gehören meine Daten?", a: "Dir. Beim Self-Hosting bleiben deine Daten vollständig auf deinem Server. Auch im gehosteten Plan gehören sie dir, und du kannst jederzeit alles exportieren." },
      { q: "Hat es einen KI-Assistenten?", a: "Optional, ja. Du kannst ein lokales LLM anbinden, das du selbst betreibst, und es Dinge nachschlagen oder Kunden und Rechnungen in normaler Sprache entwerfen lassen. Du bestätigst jede Änderung, bevor etwas gespeichert wird, und die Doku erklärt die Einrichtung." },
      { q: "Wie ausgereift ist chohle?", a: "Es ist ehrlich gesagt in Arbeit: ein Nebenprojekt, offen entwickelt, teils mit Hilfe lokaler LLMs. Es funktioniert im Alltag, aber es gibt noch Ecken, Kanten und unentdeckte Bugs. Fällt dir etwas auf, eröffne bitte ein Issue auf GitHub; ein freundlicher Hinweis hilft enorm." },
    ],
  },
  fr: {
    meta: {
      title: "chohle : factures, projets et e-mails au même endroit",
      description: "chohle réunit la facturation, le pipeline de projets et les e-mails clients pour les indépendants et petites équipes en Suisse. Open source et gratuit à l'essai.",
    },
    hero: {
      headline: 'Factures, projets et e-mails, réunis dans un espace <span class="text-accent dark:text-accent-light">serein</span>.',
      sub: "chohle réunit la facturation, le pipeline de projets et les e-mails clients pour les indépendants et petites équipes en Suisse. Open source et gratuit à l'essai, sans compte.",
      keywords: ["QR-factures suisses", "TVA", "Facturation", "Devis", "Projets & pipeline", "E-mail clients", "Paiements", "Rappels", "Open source", "Auto-hébergé", "Assistant IA"],
    },
    features: {
      headline: "Du premier devis au dernier paiement.",
      sub: "La plupart des outils vous obligent à relier vous-même facturation, projets et e-mails. chohle réunit les trois au même endroit, pour que rien ne passe à la trappe.",
      items: [
        { title: "Facturation", body: "Créez une QR-facture suisse en quelques secondes et envoyez-la. chohle suit ce qui est payé et relance gentiment les retards." },
        { title: "Pipeline", body: "Suivez chaque affaire et chaque achat sur un tableau glisser-déposer, du premier contact à la signature. Rien ne traîne, et vous voyez quels clients en valent la peine." },
        { title: "E-mail", body: "Gardez les échanges clients juste à côté du travail concerné. Fini de fouiller dans une boîte mail séparée." },
      ],
    },
    why: {
      heading: "Conçu pour se faire oublier.",
      body: "chohle soigne les fondamentaux ennuyeux : open source, prêt pour la Suisse et hébergeable par vous, pour que vos données restent chez vous et que vous reveniez au travail qui paie vraiment.",
      items: [
        { tag: "Prêt pour la Suisse", title: "QR-factures et TVA, bien gérées", desc: "Les factures suivent la norme suisse de la QR-facture et gèrent la TVA comme la Suisse l'attend, dès le départ." },
        { tag: "Auto-hébergeable", title: "Sur votre propre serveur", desc: "Lancez-le avec Docker en une seule commande et gardez tout en interne. Rien ne quitte jamais votre infrastructure." },
        { tag: "Aucun verrouillage", title: "Formats ouverts", desc: "Vos données vivent dans un simple fichier SQLite que vous pouvez sauvegarder ou exporter. Vos factures et vos clients sont toujours à vous." },
        { tag: "Open source", title: "Lisez chaque ligne", desc: "Tout le code est public sous licence MIT. Auditez-le, étendez-le ou contribuez. Il est à vous de le façonner." },
      ],
    },
    pricing: {
      headline: "Des tarifs simples, ouverts par défaut.",
      body: "Gratuit pour toujours en auto-hébergement. Une offre hébergée si vous préférez ne pas gérer de serveur.",
    },
    faqsTitle: "Questions et réponses",
    faqsSub: "Tout ce qu'il faut savoir avant d'essayer chohle. Vous ne trouvez pas ? La documentation va plus loin.",
    faqs: [
      { q: "chohle est-il vraiment gratuit ?", a: "Oui. chohle est open source, alors auto-hébergez-le gratuitement, aussi longtemps que vous voulez. Nous proposons aussi une offre hébergée payante pour ceux qui préfèrent ne pas gérer de serveur." },
      { q: "Puis-je l'auto-héberger ?", a: "Tout à fait. chohle est conçu pour tourner sur votre propre serveur, et le guide d'auto-hébergement vous accompagne pas à pas. Vos données n'ont jamais à quitter votre infrastructure." },
      { q: "Gère-t-il les QR-factures suisses ?", a: "Oui. chohle génère des factures avec une QR-facture conforme à la norme suisse, prêtes à être scannées et payées par vos clients." },
      { q: "À qui appartiennent mes données ?", a: "À vous. En auto-hébergement, vos données restent entièrement sur votre serveur. Avec l'offre hébergée, elles vous appartiennent toujours, et vous pouvez tout exporter à tout moment." },
      { q: "A-t-il un assistant IA ?", a: "En option, oui. Vous pouvez connecter un LLM local que vous hébergez vous-même et lui demander de chercher une information ou de préparer des clients et des factures en langage naturel. Vous validez chaque changement avant qu'il soit enregistré, et la documentation explique la mise en place." },
      { q: "Quelle est la maturité de chohle ?", a: "C'est honnêtement un travail en cours : un projet personnel, développé au grand jour, en partie avec l'aide de LLM locaux. Il fonctionne au quotidien, mais il reste des aspérités et des bugs à trouver. Si quelque chose cloche, ouvrez une issue sur GitHub ; un mot bienveillant aide beaucoup." },
    ],
  },
  it: {
    meta: {
      title: "chohle: fatture, progetti ed e-mail in un unico posto",
      description: "chohle unisce fatturazione, pipeline dei progetti ed e-mail dei clienti per freelance e piccoli team svizzeri. Open source e gratis da provare.",
    },
    hero: {
      headline: 'Fatture, progetti ed e-mail in un unico spazio <span class="text-accent dark:text-accent-light">sereno</span>.',
      sub: "chohle unisce fatturazione, pipeline dei progetti ed e-mail dei clienti per freelance e piccoli team svizzeri. Open source e gratis da provare, senza account.",
      keywords: ["QR-fatture svizzere", "IVA", "Fatturazione", "Preventivi", "Progetti & pipeline", "E-mail clienti", "Pagamenti", "Solleciti", "Open source", "Self-hosting", "Assistente IA"],
    },
    features: {
      headline: "Dal primo preventivo all'ultimo pagamento.",
      sub: "La maggior parte degli strumenti ti costringe a collegare da solo fatture, progetti ed e-mail. chohle tiene insieme tutti e tre in un unico posto, così non ti sfugge nulla.",
      items: [
        { title: "Fatturazione", body: "Crea una QR-fattura svizzera in pochi secondi e inviala. chohle tiene traccia di ciò che è pagato e sollecita con gentilezza gli insoluti." },
        { title: "Pipeline", body: "Segui ogni trattativa e ogni acquisto su una lavagna drag-and-drop, dal primo contatto alla chiusura. Nulla si blocca, e vedi quali clienti valgono la pena." },
        { title: "E-mail", body: "Tieni le conversazioni con i clienti accanto al lavoro a cui si riferiscono. Niente più ricerche in una casella separata." },
      ],
    },
    why: {
      heading: "Progettato per non intralciarti.",
      body: "chohle cura le basi noiose: open source, pronto per la Svizzera e gestibile da te, così i tuoi dati restano con te e puoi tornare al lavoro che paga davvero.",
      items: [
        { tag: "Pronto per la Svizzera", title: "QR-fatture e IVA, fatte bene", desc: "Le fatture seguono lo standard svizzero della QR-fattura e gestiscono l'IVA come si aspetta la Svizzera, fin da subito." },
        { tag: "Auto-ospitabile", title: "Sul tuo server", desc: "Avvialo con Docker in un solo comando e tieni tutto in casa. Nulla lascia mai la tua infrastruttura." },
        { tag: "Nessun lock-in", title: "Formati aperti", desc: "I tuoi dati vivono in un semplice file SQLite che puoi salvare o esportare. Le tue fatture e i tuoi clienti restano sempre tuoi." },
        { tag: "Open source", title: "Leggi ogni riga", desc: "L'intero codice è pubblico sotto licenza MIT. Verificalo, estendilo o contribuisci. È tuo da plasmare." },
      ],
    },
    pricing: {
      headline: "Prezzi semplici, aperti per natura.",
      body: "Gratis per sempre in self-hosting. Un piano ospitato per quando preferisci non gestire un server.",
    },
    faqsTitle: "Domande e risposte",
    faqsSub: "Tutto quello che vale la pena sapere prima di provare chohle. Non trovi la risposta? La documentazione approfondisce.",
    faqs: [
      { q: "chohle è davvero gratuito?", a: "Sì. chohle è open source, quindi ospitalo gratis, per tutto il tempo che vuoi. Offriamo anche un piano ospitato a pagamento per chi preferisce non gestire un server." },
      { q: "Posso ospitarlo da solo?", a: "Assolutamente. chohle è fatto per girare sul tuo server e la guida al self-hosting ti accompagna passo dopo passo. I tuoi dati non devono mai lasciare la tua infrastruttura." },
      { q: "Gestisce le QR-fatture svizzere?", a: "Sì. chohle genera fatture con una QR-fattura conforme allo standard svizzero, pronte per essere scansionate e pagate dai tuoi clienti." },
      { q: "A chi appartengono i miei dati?", a: "A te. In self-hosting i tuoi dati restano interamente sul tuo server. Anche con il piano ospitato sono tuoi, e puoi esportare tutto in qualsiasi momento." },
      { q: "Ha un assistente IA?", a: "Opzionale, sì. Puoi collegare un LLM locale che ospiti tu stesso e chiedergli di cercare informazioni o preparare clienti e fatture in linguaggio naturale. Confermi ogni modifica prima che venga salvata, e la documentazione spiega come configurarlo." },
      { q: "Quanto è maturo chohle?", a: "È onestamente un lavoro in corso: un progetto personale, sviluppato alla luce del sole, in parte con l'aiuto di LLM locali. Funziona ogni giorno, ma ci sono ancora spigoli e bug da scovare. Se noti qualcosa che non va, apri una issue su GitHub; una segnalazione gentile aiuta molto." },
    ],
  },
};

export function getHome(lang: Lang): HomeContent {
  return home[lang] ?? home[defaultLang]!;
}
