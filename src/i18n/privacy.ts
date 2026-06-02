import { defaultLang, type Lang } from "./config";

export interface PrivacyBlock {
  type: "p" | "ul";
  text?: string;
  items?: string[];
}

export interface PrivacySection {
  heading: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyContent {
  meta: { title: string; description: string };
  title: string;
  lastUpdated: { label: string; date: string };
  intro: string;
  sections: PrivacySection[];
}

const privacy: Partial<Record<Lang, PrivacyContent>> = {
  en: {
    meta: {
      title: "chohle: Privacy",
      description:
        "How chohle handles your data: when you self-host, it stays on your server. This site collects very little.",
    },
    title: "Privacy",
    lastUpdated: { label: "Last updated", date: "2 June 2026" },
    intro:
      "chohle is open source and built to be <strong>self-hosted</strong>. That shapes everything below: most of the time, your data isn't ours to handle at all. This page explains the little we do collect through this website, and how the chohle software treats your data.",
    sections: [
      {
        heading: "Your data in chohle",
        blocks: [
          {
            type: "p",
            text: "When you self-host chohle, everything you put into it, invoices, clients, projects, and email, lives <strong>entirely on your own server</strong>. We never receive it, see it, or store it. You're in control of that data, where it's hosted, and how it's protected.",
          },
        ],
      },
      {
        heading: "This website",
        blocks: [
          { type: "p", text: "This marketing site is intentionally light on data collection:" },
          {
            type: "ul",
            items: [
              "No accounts, and no tracking or advertising cookies.",
              "No third-party analytics following you around.",
              "Our hosting provider may keep standard server logs (such as IP addresses) to operate and protect the site.",
              "Fonts are self-hosted, so no third party is contacted just to render the page.",
            ],
          },
        ],
      },
      {
        heading: "The demo",
        blocks: [
          {
            type: "p",
            text: "If you try a hosted demo of chohle, treat it as a sandbox: anything you enter is for testing only, may be visible to others, and can be reset or deleted at any time. Please don't put real client data into the demo.",
          },
        ],
      },
      {
        heading: "chohle Cloud",
        blocks: [
          {
            type: "p",
            text: "There's no <strong>chohle Cloud</strong> today, and I can't promise there ever will be one. chohle is currently built to be self-hosted, run by you on your own server. If a managed Cloud ever happens, it would handle data on your behalf, and this policy will be updated to explain exactly how before you're asked to put anything real into it.",
          },
        ],
      },
      {
        heading: "Changes",
        blocks: [
          {
            type: "p",
            text: 'We may update this policy as chohle grows. When we do, we\'ll change the "last updated" date at the top of this page.',
          },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          {
            type: "p",
            text: 'Questions about privacy? Since chohle is built in the open, the best place to reach me is by opening an issue on the <a href="https://github.com/chohle/chohle" target="_blank" rel="noopener">project\'s GitHub repository</a>, or by email at <a href="mailto:emanuell@ademi.me">emanuell@ademi.me</a>.',
          },
        ],
      },
    ],
  },
  de: {
    meta: {
      title: "chohle: Datenschutz",
      description:
        "Wie chohle mit deinen Daten umgeht: Wenn du selbst hostest, bleiben sie auf deinem Server. Diese Website erfasst sehr wenig.",
    },
    title: "Datenschutz",
    lastUpdated: { label: "Zuletzt aktualisiert", date: "2. Juni 2026" },
    intro:
      "chohle ist Open Source und dafür gebaut, <strong>selbst gehostet</strong> zu werden. Das prägt alles Folgende: Meistens haben wir deine Daten gar nicht in der Hand. Diese Seite erklärt das Wenige, das wir über diese Website erfassen, und wie die chohle-Software mit deinen Daten umgeht.",
    sections: [
      {
        heading: "Deine Daten in chohle",
        blocks: [
          {
            type: "p",
            text: "Wenn du chohle selbst hostest, bleibt alles, was du eingibst, Rechnungen, Kunden, Projekte und E-Mails, <strong>vollständig auf deinem eigenen Server</strong>. Wir erhalten es nie, sehen es nie und speichern es nie. Du hast die Kontrolle über diese Daten, darüber, wo sie liegen, und darüber, wie sie geschützt werden.",
          },
        ],
      },
      {
        heading: "Diese Website",
        blocks: [
          { type: "p", text: "Diese Marketing-Website erfasst bewusst nur wenig Daten:" },
          {
            type: "ul",
            items: [
              "Keine Konten und keine Tracking- oder Werbe-Cookies.",
              "Keine Analyse-Dienste von Drittanbietern, die dir folgen.",
              "Unser Hosting-Anbieter kann übliche Server-Logs (etwa IP-Adressen) führen, um die Website zu betreiben und zu schützen.",
              "Schriften werden selbst gehostet, damit für die Darstellung der Seite kein Drittanbieter kontaktiert wird.",
            ],
          },
        ],
      },
      {
        heading: "Die Demo",
        blocks: [
          {
            type: "p",
            text: "Wenn du eine gehostete Demo von chohle ausprobierst, behandle sie als Sandbox: Alles, was du eingibst, dient nur dem Testen, kann für andere sichtbar sein und jederzeit zurückgesetzt oder gelöscht werden. Bitte gib keine echten Kundendaten in die Demo ein.",
          },
        ],
      },
      {
        heading: "chohle Cloud",
        blocks: [
          {
            type: "p",
            text: "Es gibt heute keine <strong>chohle Cloud</strong>, und ich kann nicht versprechen, dass es je eine geben wird. chohle ist derzeit darauf ausgelegt, selbst gehostet zu werden, von dir auf deinem eigenen Server betrieben. Sollte es je eine verwaltete Cloud geben, würde sie Daten in deinem Auftrag verarbeiten, und diese Erklärung würde genau dazu aktualisiert, bevor du gebeten wirst, etwas Echtes hineinzugeben.",
          },
        ],
      },
      {
        heading: "Änderungen",
        blocks: [
          {
            type: "p",
            text: 'Wir können diese Erklärung anpassen, während chohle wächst. Wenn wir das tun, ändern wir das Datum unter "Zuletzt aktualisiert" oben auf dieser Seite.',
          },
        ],
      },
      {
        heading: "Kontakt",
        blocks: [
          {
            type: "p",
            text: 'Fragen zum Datenschutz? Da chohle offen entwickelt wird, erreichst du mich am besten, indem du ein Issue im <a href="https://github.com/chohle/chohle" target="_blank" rel="noopener">GitHub-Repository des Projekts</a> eröffnest, oder per E-Mail an <a href="mailto:emanuell@ademi.me">emanuell@ademi.me</a>.',
          },
        ],
      },
    ],
  },
  fr: {
    meta: {
      title: "chohle: Confidentialité",
      description:
        "Comment chohle gère vos données : en auto-hébergement, elles restent sur votre serveur. Ce site collecte très peu de choses.",
    },
    title: "Confidentialité",
    lastUpdated: { label: "Dernière mise à jour", date: "2 juin 2026" },
    intro:
      "chohle est open source et conçu pour être <strong>auto-hébergé</strong>. Cela explique tout ce qui suit : la plupart du temps, vos données ne passent pas du tout par nous. Cette page détaille le peu que nous collectons via ce site, et la manière dont le logiciel chohle traite vos données.",
    sections: [
      {
        heading: "Vos données dans chohle",
        blocks: [
          {
            type: "p",
            text: "Lorsque vous auto-hébergez chohle, tout ce que vous y saisissez, factures, clients, projets et e-mails, réside <strong>entièrement sur votre propre serveur</strong>. Nous ne le recevons jamais, ne le voyons jamais et ne le stockons jamais. Vous contrôlez ces données, leur hébergement et leur protection.",
          },
        ],
      },
      {
        heading: "Ce site",
        blocks: [
          { type: "p", text: "Ce site de présentation collecte délibérément peu de données :" },
          {
            type: "ul",
            items: [
              "Aucun compte, ni cookies de suivi ou de publicité.",
              "Aucune analyse tierce qui vous suit à la trace.",
              "Notre hébergeur peut conserver des journaux serveur standard (comme les adresses IP) pour exploiter et protéger le site.",
              "Les polices sont auto-hébergées, donc aucun tiers n'est contacté simplement pour afficher la page.",
            ],
          },
        ],
      },
      {
        heading: "La démo",
        blocks: [
          {
            type: "p",
            text: "Si vous essayez une démo hébergée de chohle, considérez-la comme un bac à sable : tout ce que vous y saisissez sert uniquement aux tests, peut être visible par d'autres et peut être réinitialisé ou supprimé à tout moment. Merci de ne pas y saisir de vraies données clients.",
          },
        ],
      },
      {
        heading: "chohle Cloud",
        blocks: [
          {
            type: "p",
            text: "Il n'y a pas de <strong>chohle Cloud</strong> aujourd'hui, et je ne peux pas promettre qu'il y en aura un. chohle est pour l'instant conçu pour être auto-hébergé, géré par vous sur votre propre serveur. Si un Cloud managé voit le jour un jour, il traiterait des données pour votre compte, et cette politique sera mise à jour pour expliquer précisément comment, avant qu'on vous demande d'y saisir quoi que ce soit de réel.",
          },
        ],
      },
      {
        heading: "Modifications",
        blocks: [
          {
            type: "p",
            text: 'Nous pouvons mettre à jour cette politique à mesure que chohle évolue. Le cas échéant, nous modifierons la date de « dernière mise à jour » en haut de cette page.',
          },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          {
            type: "p",
            text: 'Des questions sur la confidentialité ? Comme chohle est développé de manière ouverte, le mieux est de me contacter en ouvrant une issue sur le <a href="https://github.com/chohle/chohle" target="_blank" rel="noopener">dépôt GitHub du projet</a>, ou par e-mail à <a href="mailto:emanuell@ademi.me">emanuell@ademi.me</a>.',
          },
        ],
      },
    ],
  },
  it: {
    meta: {
      title: "chohle: Privacy",
      description:
        "Come chohle gestisce i tuoi dati: in self-hosting restano sul tuo server. Questo sito raccoglie pochissimo.",
    },
    title: "Privacy",
    lastUpdated: { label: "Ultimo aggiornamento", date: "2 giugno 2026" },
    intro:
      "chohle è open source ed è fatto per essere <strong>ospitato autonomamente</strong>. Questo determina tutto ciò che segue: nella maggior parte dei casi i tuoi dati non passano affatto da noi. Questa pagina spiega il poco che raccogliamo tramite questo sito e come il software chohle tratta i tuoi dati.",
    sections: [
      {
        heading: "I tuoi dati in chohle",
        blocks: [
          {
            type: "p",
            text: "Quando ospiti chohle autonomamente, tutto ciò che inserisci, fatture, clienti, progetti ed e-mail, risiede <strong>interamente sul tuo server</strong>. Noi non lo riceviamo mai, non lo vediamo mai e non lo memorizziamo mai. Hai il controllo di questi dati, di dove sono ospitati e di come sono protetti.",
          },
        ],
      },
      {
        heading: "Questo sito",
        blocks: [
          { type: "p", text: "Questo sito di presentazione raccoglie volutamente pochi dati:" },
          {
            type: "ul",
            items: [
              "Nessun account e nessun cookie di tracciamento o pubblicità.",
              "Nessun servizio di analisi di terze parti che ti segue.",
              "Il nostro provider di hosting può conservare i normali log del server (come gli indirizzi IP) per gestire e proteggere il sito.",
              "I font sono ospitati internamente, così nessuna terza parte viene contattata solo per mostrare la pagina.",
            ],
          },
        ],
      },
      {
        heading: "La demo",
        blocks: [
          {
            type: "p",
            text: "Se provi una demo ospitata di chohle, trattala come un ambiente di prova: tutto ciò che inserisci serve solo a fare test, può essere visibile ad altri e può essere reimpostato o cancellato in qualsiasi momento. Per favore non inserire dati reali dei clienti nella demo.",
          },
        ],
      },
      {
        heading: "chohle Cloud",
        blocks: [
          {
            type: "p",
            text: "Oggi non esiste un <strong>chohle Cloud</strong>, e non posso promettere che esisterà mai. Al momento chohle è pensato per essere ospitato autonomamente, gestito da te sul tuo server. Se mai arriverà un Cloud gestito, tratterebbe i dati per tuo conto e questa informativa verrebbe aggiornata per spiegare esattamente come, prima che ti venga chiesto di inserire qualcosa di reale.",
          },
        ],
      },
      {
        heading: "Modifiche",
        blocks: [
          {
            type: "p",
            text: 'Potremmo aggiornare questa informativa man mano che chohle cresce. Quando lo faremo, cambieremo la data di "ultimo aggiornamento" in cima a questa pagina.',
          },
        ],
      },
      {
        heading: "Contatti",
        blocks: [
          {
            type: "p",
            text: 'Domande sulla privacy? Dato che chohle è sviluppato in modo aperto, il modo migliore per contattarmi è aprire una issue nel <a href="https://github.com/chohle/chohle" target="_blank" rel="noopener">repository GitHub del progetto</a>, oppure scrivermi a <a href="mailto:emanuell@ademi.me">emanuell@ademi.me</a>.',
          },
        ],
      },
    ],
  },
};

export function getPrivacy(lang: Lang): PrivacyContent {
  return privacy[lang] ?? privacy[defaultLang]!;
}
