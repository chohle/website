import { defaultLang, type Lang } from "./config";

export interface HomeContent {
  meta: { title: string; description: string };
  hero: { headline: string; sub: string };
  features: { headline: string; sub: string; items: { title: string; body: string }[] };
  why: { heading: string; body: string; values: { stat: string; text: string }[] };
  open: { eyebrow: string; headline: string; body: string };
  pricing: { headline: string; body: string };
  faqsTitle: string;
  faqsSub: string;
  faqs: { q: string; a: string }[];
}

const home: Partial<Record<Lang, HomeContent>> = {
  en: {
    meta: {
      title: "chohle — Invoicing, projects, and email in one place",
      description: "chohle brings billing, project tracking, and client email together for Swiss freelancers and small teams. Open source, and free to try.",
    },
    hero: {
      headline: "Invoicing, projects, and email in one calm place.",
      sub: "chohle brings billing, project tracking, and client email together for Swiss freelancers and small teams. Open source, and free to try — no account required.",
    },
    features: {
      headline: "From the first quote to the final payment.",
      sub: "Most tools make you stitch together invoicing, project tracking, and email. chohle keeps all three in one calm place, so nothing falls through the cracks.",
      items: [
        { title: "Invoicing", body: "Create a Swiss QR-bill in seconds, send it, and let chohle track what's paid and gently chase what's overdue." },
        { title: "Projects", body: "Group work into projects, log your hours, and know which clients are actually worth it before you take on more." },
        { title: "Email", body: "Keep client conversations right next to the work they're about — no more digging through a separate inbox." },
      ],
    },
    why: {
      heading: "Built to stay out of your way.",
      body: "chohle gets the boring fundamentals right — open, Swiss-ready, and yours to run — so you can get back to the work that actually pays.",
      values: [
        { stat: "Swiss-ready", text: "QR-bills and VAT handled the way Switzerland expects, right out of the box." },
        { stat: "Self-hostable", text: "Run chohle on your own server in minutes — your data never has to leave it." },
        { stat: "No lock-in", text: "Open formats and full exports. Your invoices and clients are always yours." },
      ],
    },
    open: {
      eyebrow: "Open source",
      headline: "Free, transparent, and yours to run.",
      body: "chohle is open source. Use the hosted demo, or self-host the whole thing on your own server — your data stays with you. No lock-in, no black boxes, no surprises.",
    },
    pricing: {
      headline: "Simple pricing, open by default.",
      body: "Free forever if you self-host. A hosted plan for when you'd rather not run a server yourself.",
    },
    faqsTitle: "Questions & Answers",
    faqsSub: "Everything worth knowing before you try chohle. Can't find your answer? The docs go deeper.",
    faqs: [
      { q: "Is chohle really free?", a: "Yes. chohle is open source — self-host it for free, for as long as you like. We also offer a paid hosted plan for people who'd rather not run a server themselves." },
      { q: "Can I self-host it?", a: "Absolutely. chohle is built to run on your own server, and the self-hosting guide walks you through it. Your data never has to leave your infrastructure." },
      { q: "Does it do Swiss QR-bills?", a: "Yes. chohle generates invoices with a QR-bill that follows the Swiss QR-bill standard, ready for your clients to scan and pay." },
      { q: "Who owns my data?", a: "You do. When you self-host, your data stays entirely on your server. On the hosted plan it's still yours — and you can export everything at any time." },
    ],
  },
  de: {
    meta: {
      title: "chohle — Rechnungen, Projekte und E-Mails an einem Ort",
      description: "chohle vereint Rechnungsstellung, Projektzeiterfassung und Kunden-E-Mails für Schweizer Freelancer und kleine Teams. Open Source und kostenlos zum Ausprobieren.",
    },
    hero: {
      headline: "Rechnungen, Projekte und E-Mails an einem ruhigen Ort.",
      sub: "chohle vereint Rechnungsstellung, Projektzeiterfassung und Kunden-E-Mails – für Schweizer Freelancer und kleine Teams. Open Source und kostenlos zum Ausprobieren – ganz ohne Konto.",
    },
    features: {
      headline: "Von der ersten Offerte bis zur letzten Zahlung.",
      sub: "Die meisten Tools zwingen dich, Rechnungen, Projekte und E-Mails mühsam zu verbinden. chohle hält alle drei an einem ruhigen Ort zusammen – damit nichts untergeht.",
      items: [
        { title: "Rechnungen", body: "Erstelle in Sekunden eine Schweizer QR-Rechnung, verschicke sie, und chohle behält im Blick, was bezahlt ist – und mahnt freundlich, was überfällig ist." },
        { title: "Projekte", body: "Bündle die Arbeit in Projekten, erfasse deine Stunden und erkenne, welche Kunden sich wirklich lohnen – bevor du noch mehr annimmst." },
        { title: "E-Mail", body: "Halte Kundengespräche direkt bei der Arbeit, um die es geht – kein Wühlen mehr in einem separaten Postfach." },
      ],
    },
    why: {
      heading: "Entwickelt, um dir nicht im Weg zu stehen.",
      body: "chohle macht die langweiligen Grundlagen richtig – offen, Schweiz-tauglich und selbst betreibbar – damit du zurück zur Arbeit kannst, die wirklich Geld bringt.",
      values: [
        { stat: "Schweiz-tauglich", text: "QR-Rechnungen und MWST so, wie es die Schweiz erwartet – von Anfang an." },
        { stat: "Selbst hostbar", text: "Betreibe chohle in Minuten auf deinem eigenen Server – deine Daten müssen ihn nie verlassen." },
        { stat: "Kein Lock-in", text: "Offene Formate und vollständige Exporte. Deine Rechnungen und Kunden gehören immer dir." },
      ],
    },
    open: {
      eyebrow: "Open Source",
      headline: "Kostenlos, transparent und selbst betreibbar.",
      body: "chohle ist Open Source. Nutze die gehostete Demo oder betreibe alles selbst auf deinem Server – deine Daten bleiben bei dir. Kein Lock-in, keine Blackbox, keine Überraschungen.",
    },
    pricing: {
      headline: "Einfache Preise, offen von Haus aus.",
      body: "Für immer kostenlos, wenn du selbst hostest. Ein gehosteter Plan, wenn du keinen Server betreiben möchtest.",
    },
    faqsTitle: "Fragen & Antworten",
    faqsSub: "Alles Wissenswerte, bevor du chohle ausprobierst. Nichts gefunden? Die Doku geht tiefer.",
    faqs: [
      { q: "Ist chohle wirklich kostenlos?", a: "Ja. chohle ist Open Source – hoste es kostenlos, so lange du möchtest. Es gibt zusätzlich einen kostenpflichtigen gehosteten Plan für alle, die keinen eigenen Server betreiben wollen." },
      { q: "Kann ich es selbst hosten?", a: "Auf jeden Fall. chohle ist dafür gebaut, auf deinem eigenen Server zu laufen, und die Self-Hosting-Anleitung führt dich Schritt für Schritt durch. Deine Daten müssen deine Infrastruktur nie verlassen." },
      { q: "Kann es Schweizer QR-Rechnungen?", a: "Ja. chohle erstellt Rechnungen mit einer QR-Rechnung nach dem Schweizer QR-Rechnungs-Standard – bereit zum Scannen und Bezahlen für deine Kunden." },
      { q: "Wem gehören meine Daten?", a: "Dir. Beim Self-Hosting bleiben deine Daten vollständig auf deinem Server. Auch im gehosteten Plan gehören sie dir – und du kannst jederzeit alles exportieren." },
    ],
  },
  fr: {
    meta: {
      title: "chohle — Factures, projets et e-mails au même endroit",
      description: "chohle réunit la facturation, le suivi de projets et les e-mails clients pour les indépendants et petites équipes en Suisse. Open source et gratuit à l'essai.",
    },
    hero: {
      headline: "Factures, projets et e-mails, réunis dans un espace serein.",
      sub: "chohle réunit la facturation, le suivi de projets et les e-mails clients pour les indépendants et petites équipes en Suisse. Open source et gratuit à l'essai — sans compte.",
    },
    features: {
      headline: "Du premier devis au dernier paiement.",
      sub: "La plupart des outils vous obligent à jongler entre facturation, suivi de projets et e-mails. chohle réunit les trois au même endroit, pour que rien ne passe à la trappe.",
      items: [
        { title: "Facturation", body: "Créez une QR-facture suisse en quelques secondes, envoyez-la, et chohle suit ce qui est payé et relance gentiment les retards." },
        { title: "Projets", body: "Regroupez le travail en projets, enregistrez vos heures et sachez quels clients en valent vraiment la peine avant d'en accepter d'autres." },
        { title: "E-mail", body: "Gardez les échanges clients juste à côté du travail concerné — fini de fouiller dans une boîte mail séparée." },
      ],
    },
    why: {
      heading: "Conçu pour se faire oublier.",
      body: "chohle soigne les fondamentaux ennuyeux — ouvert, prêt pour la Suisse et hébergeable par vous — pour que vous reveniez au travail qui paie vraiment.",
      values: [
        { stat: "Prêt pour la Suisse", text: "QR-factures et TVA gérées comme la Suisse l'attend, dès le départ." },
        { stat: "Auto-hébergeable", text: "Hébergez chohle sur votre propre serveur en quelques minutes — vos données n'ont jamais à le quitter." },
        { stat: "Aucun verrouillage", text: "Formats ouverts et exports complets. Vos factures et vos clients restent toujours les vôtres." },
      ],
    },
    open: {
      eyebrow: "Open source",
      headline: "Gratuit, transparent et hébergeable par vous.",
      body: "chohle est open source. Utilisez la démo hébergée, ou hébergez le tout sur votre propre serveur — vos données restent chez vous. Aucun verrouillage, aucune boîte noire, aucune surprise.",
    },
    pricing: {
      headline: "Des tarifs simples, ouverts par défaut.",
      body: "Gratuit pour toujours en auto-hébergement. Une offre hébergée si vous préférez ne pas gérer de serveur.",
    },
    faqsTitle: "Questions & réponses",
    faqsSub: "Tout ce qu'il faut savoir avant d'essayer chohle. Vous ne trouvez pas ? La documentation va plus loin.",
    faqs: [
      { q: "chohle est-il vraiment gratuit ?", a: "Oui. chohle est open source — auto-hébergez-le gratuitement, aussi longtemps que vous voulez. Nous proposons aussi une offre hébergée payante pour ceux qui préfèrent ne pas gérer de serveur." },
      { q: "Puis-je l'auto-héberger ?", a: "Tout à fait. chohle est conçu pour tourner sur votre propre serveur, et le guide d'auto-hébergement vous accompagne pas à pas. Vos données n'ont jamais à quitter votre infrastructure." },
      { q: "Gère-t-il les QR-factures suisses ?", a: "Oui. chohle génère des factures avec une QR-facture conforme à la norme suisse, prêtes à être scannées et payées par vos clients." },
      { q: "À qui appartiennent mes données ?", a: "À vous. En auto-hébergement, vos données restent entièrement sur votre serveur. Avec l'offre hébergée, elles vous appartiennent toujours — et vous pouvez tout exporter à tout moment." },
    ],
  },
  it: {
    meta: {
      title: "chohle — Fatture, progetti ed e-mail in un unico posto",
      description: "chohle unisce fatturazione, gestione dei progetti ed e-mail dei clienti per freelance e piccoli team svizzeri. Open source e gratis da provare.",
    },
    hero: {
      headline: "Fatture, progetti ed e-mail in un unico spazio sereno.",
      sub: "chohle unisce fatturazione, gestione dei progetti ed e-mail dei clienti per freelance e piccoli team svizzeri. Open source e gratis da provare — senza account.",
    },
    features: {
      headline: "Dal primo preventivo all'ultimo pagamento.",
      sub: "La maggior parte degli strumenti ti costringe a incastrare fatture, progetti ed e-mail. chohle tiene insieme tutti e tre in un unico posto, così non ti sfugge nulla.",
      items: [
        { title: "Fatturazione", body: "Crea una QR-fattura svizzera in pochi secondi, inviala e lascia che chohle tenga traccia di ciò che è pagato e solleciti con gentilezza gli insoluti." },
        { title: "Progetti", body: "Raggruppa il lavoro in progetti, registra le tue ore e scopri quali clienti valgono davvero prima di accettarne altri." },
        { title: "E-mail", body: "Tieni le conversazioni con i clienti accanto al lavoro a cui si riferiscono — niente più ricerche in una casella separata." },
      ],
    },
    why: {
      heading: "Progettato per non intralciarti.",
      body: "chohle cura le basi noiose — aperto, pronto per la Svizzera e gestibile da te — così puoi tornare al lavoro che paga davvero.",
      values: [
        { stat: "Pronto per la Svizzera", text: "QR-fatture e IVA gestite come si aspetta la Svizzera, fin da subito." },
        { stat: "Self-hosting", text: "Esegui chohle sul tuo server in pochi minuti — i tuoi dati non devono mai uscirne." },
        { stat: "Nessun lock-in", text: "Formati aperti ed esportazioni complete. Le tue fatture e i tuoi clienti restano sempre tuoi." },
      ],
    },
    open: {
      eyebrow: "Open source",
      headline: "Gratuito, trasparente e gestibile da te.",
      body: "chohle è open source. Usa la demo ospitata oppure esegui tutto sul tuo server — i tuoi dati restano con te. Nessun lock-in, nessuna scatola nera, nessuna sorpresa.",
    },
    pricing: {
      headline: "Prezzi semplici, aperti per natura.",
      body: "Gratis per sempre in self-hosting. Un piano ospitato per quando preferisci non gestire un server.",
    },
    faqsTitle: "Domande e risposte",
    faqsSub: "Tutto quello che vale la pena sapere prima di provare chohle. Non trovi la risposta? La documentazione approfondisce.",
    faqs: [
      { q: "chohle è davvero gratuito?", a: "Sì. chohle è open source — ospitalo gratis, per tutto il tempo che vuoi. Offriamo anche un piano ospitato a pagamento per chi preferisce non gestire un server." },
      { q: "Posso ospitarlo da solo?", a: "Assolutamente. chohle è fatto per girare sul tuo server e la guida al self-hosting ti accompagna passo dopo passo. I tuoi dati non devono mai lasciare la tua infrastruttura." },
      { q: "Gestisce le QR-fatture svizzere?", a: "Sì. chohle genera fatture con una QR-fattura conforme allo standard svizzero, pronte per essere scansionate e pagate dai tuoi clienti." },
      { q: "A chi appartengono i miei dati?", a: "A te. In self-hosting i tuoi dati restano interamente sul tuo server. Anche con il piano ospitato sono tuoi — e puoi esportare tutto in qualsiasi momento." },
    ],
  },
};

export function getHome(lang: Lang): HomeContent {
  return home[lang] ?? home[defaultLang]!;
}
