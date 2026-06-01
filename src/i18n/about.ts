import { defaultLang, type Lang } from "./config";

export interface AboutContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; intro: string };
  story: string[];
  principlesEyebrow: string;
  principlesHeading: string;
  principles: { title: string; desc: string }[];
  mission: { statement: string };
}

const about: Partial<Record<Lang, AboutContent>> = {
  en: {
    meta: {
      title: "chohle — About",
      description: "chohle started as a project to learn Node.js and Nuxt, built for a friend who runs an IT company — and grew into a calm, open-source invoicing and projects tool anyone can use.",
    },
    hero: {
      eyebrow: "About",
      headline: "Built to learn — and to be used.",
      intro: "Hi, I'm Emanuell. I built chohle to teach myself Node.js and Nuxt — not with another throwaway tutorial, but by solving a real problem for a friend who runs an IT company. It's open source, so anyone can use it.",
    },
    story: [
      "I learn best by building. So instead of grinding through another tutorial, I went looking for a real problem to solve with <strong>Node.js and Nuxt</strong>.",
      "I found it close to home: a good friend runs an <strong>IT company</strong> and loses hours to invoicing, projects, and client email. We've talked about it more times than I can count — so I built chohle for him, and for anyone else stuck with the same admin.",
      "It's <strong>open source</strong> for the same reason I started it — to learn in the open. Read the code, poke holes in it, suggest improvements, or just self-host it and use it. That's the whole point.",
    ],
    principlesEyebrow: "What I care about",
    principlesHeading: "A few things I won't budge on.",
    principles: [
      { title: "Open by default", desc: "Every line is public. It's how I learn — and it means the tool genuinely belongs to whoever uses it." },
      { title: "Calm by design", desc: "No dashboards screaming for attention. chohle does the few things you need, quietly, and gets out of the way." },
      { title: "Built for Switzerland", desc: "QR-bills, VAT, the formats and rules Swiss businesses actually deal with — handled properly, not bolted on." },
      { title: "Yours to keep", desc: "Your data lives on your server, in open formats, exportable any time. No lock-in, no hostage-taking." },
    ],
    mission: {
      statement: "chohle is me learning in public — and building something genuinely useful while I'm at it. If that resonates, come build with me.",
    },
  },
  de: {
    meta: {
      title: "chohle — Über uns",
      description: "chohle begann als Projekt, um Node.js und Nuxt zu lernen, gebaut für einen Freund mit einer IT-Firma — und wurde zu einem ruhigen, quelloffenen Tool für Rechnungen und Projekte, das jeder nutzen kann.",
    },
    hero: {
      eyebrow: "Über uns",
      headline: "Gebaut, um zu lernen — und genutzt zu werden.",
      intro: "Hoi, ich bin Emanuell. Ich habe chohle gebaut, um mir Node.js und Nuxt selbst beizubringen — nicht mit noch einem Wegwerf-Tutorial, sondern indem ich ein echtes Problem für einen Freund mit einer IT-Firma löse. Es ist Open Source, also kann es jeder nutzen.",
    },
    story: [
      "Am besten lerne ich, indem ich baue. Statt mich durch noch ein Tutorial zu quälen, habe ich also ein echtes Problem gesucht, das ich mit <strong>Node.js und Nuxt</strong> lösen kann.",
      "Ich fand es ganz in der Nähe: Ein guter Freund führt eine <strong>IT-Firma</strong> und verliert Stunden mit Rechnungen, Projekten und Kunden-E-Mails. Wir haben öfter darüber geredet, als ich zählen kann — also habe ich chohle für ihn gebaut, und für alle anderen, die mit demselben Papierkram festsitzen.",
      "Es ist aus demselben Grund <strong>Open Source</strong>, aus dem ich angefangen habe — um offen zu lernen. Lies den Code, finde Schwachstellen, schlag Verbesserungen vor, oder hoste es einfach selbst und nutze es. Genau darum geht es.",
    ],
    principlesEyebrow: "Was mir wichtig ist",
    principlesHeading: "Ein paar Dinge, bei denen ich nicht nachgebe.",
    principles: [
      { title: "Offen von Haus aus", desc: "Jede Zeile ist öffentlich. So lerne ich — und es bedeutet, dass das Tool wirklich dem gehört, der es nutzt." },
      { title: "Ruhig gestaltet", desc: "Keine Dashboards, die um Aufmerksamkeit schreien. chohle erledigt die wenigen Dinge, die du brauchst, leise, und geht dir aus dem Weg." },
      { title: "Für die Schweiz gebaut", desc: "QR-Rechnungen, MWST, die Formate und Regeln, mit denen Schweizer Unternehmen wirklich zu tun haben — sauber gelöst, nicht draufgesetzt." },
      { title: "Bleibt dein", desc: "Deine Daten liegen auf deinem Server, in offenen Formaten, jederzeit exportierbar. Kein Lock-in, keine Geiselnahme." },
    ],
    mission: {
      statement: "chohle ist mein Lernen in der Öffentlichkeit — und dabei baue ich etwas wirklich Nützliches. Wenn dich das anspricht, bau mit mir.",
    },
  },
  fr: {
    meta: {
      title: "chohle — À propos",
      description: "chohle a commencé comme un projet pour apprendre Node.js et Nuxt, conçu pour un ami qui dirige une entreprise IT — et est devenu un outil de facturation et de projets serein et open source, utilisable par tous.",
    },
    hero: {
      eyebrow: "À propos",
      headline: "Conçu pour apprendre — et pour être utilisé.",
      intro: "Salut, je suis Emanuell. J'ai créé chohle pour m'apprendre Node.js et Nuxt — pas avec un énième tutoriel jetable, mais en résolvant un vrai problème pour un ami qui dirige une entreprise IT. C'est open source, donc tout le monde peut l'utiliser.",
    },
    story: [
      "J'apprends mieux en construisant. Alors plutôt que de m'acharner sur un énième tutoriel, je suis parti à la recherche d'un vrai problème à résoudre avec <strong>Node.js et Nuxt</strong>.",
      "Je l'ai trouvé tout près de chez moi : un bon ami dirige une <strong>entreprise IT</strong> et perd des heures dans la facturation, les projets et les e-mails clients. On en a parlé plus de fois que je ne peux compter — alors j'ai créé chohle pour lui, et pour tous ceux coincés avec le même administratif.",
      "C'est <strong>open source</strong> pour la même raison qui m'a fait commencer — apprendre au grand jour. Lisez le code, cherchez-y des failles, proposez des améliorations, ou hébergez-le simplement et utilisez-le. C'est tout l'intérêt.",
    ],
    principlesEyebrow: "Ce qui compte pour moi",
    principlesHeading: "Quelques principes auxquels je ne dérogerai pas.",
    principles: [
      { title: "Ouvert par défaut", desc: "Chaque ligne est publique. C'est ainsi que j'apprends — et cela signifie que l'outil appartient vraiment à celui qui l'utilise." },
      { title: "Pensé pour la sérénité", desc: "Pas de tableaux de bord qui réclament votre attention. chohle fait les quelques choses dont vous avez besoin, discrètement, puis s'efface." },
      { title: "Conçu pour la Suisse", desc: "QR-factures, TVA, les formats et règles auxquels les entreprises suisses sont réellement confrontées — traités correctement, pas rajoutés à la va-vite." },
      { title: "Vous restent acquis", desc: "Vos données vivent sur votre serveur, en formats ouverts, exportables à tout moment. Aucun verrouillage, aucune prise d'otage." },
    ],
    mission: {
      statement: "chohle, c'est moi qui apprends au grand jour — tout en construisant quelque chose de vraiment utile. Si ça vous parle, venez construire avec moi.",
    },
  },
  it: {
    meta: {
      title: "chohle — Chi siamo",
      description: "chohle è nato come progetto per imparare Node.js e Nuxt, costruito per un amico che gestisce un'azienda IT — ed è diventato uno strumento sereno e open source per fatture e progetti, usabile da chiunque.",
    },
    hero: {
      eyebrow: "Chi siamo",
      headline: "Costruito per imparare — e per essere usato.",
      intro: "Ciao, sono Emanuell. Ho creato chohle per imparare da solo Node.js e Nuxt — non con l'ennesimo tutorial usa e getta, ma risolvendo un problema reale per un amico che gestisce un'azienda IT. È open source, quindi chiunque può usarlo.",
    },
    story: [
      "Imparo meglio costruendo. Così, invece di sfiancarmi con l'ennesimo tutorial, sono andato a cercare un problema reale da risolvere con <strong>Node.js e Nuxt</strong>.",
      "L'ho trovato vicino a casa: un caro amico gestisce un'<strong>azienda IT</strong> e perde ore tra fatture, progetti ed e-mail dei clienti. Ne abbiamo parlato più volte di quante ne ricordi — così ho creato chohle per lui, e per chiunque altro sia bloccato con la stessa burocrazia.",
      "È <strong>open source</strong> per lo stesso motivo per cui ho iniziato — per imparare allo scoperto. Leggi il codice, cercane i punti deboli, proponi miglioramenti, oppure ospitalo da solo e usalo. È proprio questo il punto.",
    ],
    principlesEyebrow: "Ciò a cui tengo",
    principlesHeading: "Alcune cose su cui non transigo.",
    principles: [
      { title: "Aperto per natura", desc: "Ogni riga è pubblica. È così che imparo — e significa che lo strumento appartiene davvero a chi lo usa." },
      { title: "Sereno per scelta", desc: "Nessuna dashboard che urla per attirare l'attenzione. chohle fa le poche cose di cui hai bisogno, in silenzio, e si toglie di mezzo." },
      { title: "Pensato per la Svizzera", desc: "QR-fatture, IVA, i formati e le regole con cui le aziende svizzere hanno davvero a che fare — gestiti come si deve, non aggiunti all'ultimo." },
      { title: "Restano tuoi", desc: "I tuoi dati vivono sul tuo server, in formati aperti, esportabili in qualsiasi momento. Nessun lock-in, nessun sequestro." },
    ],
    mission: {
      statement: "chohle sono io che imparo allo scoperto — costruendo nel frattempo qualcosa di davvero utile. Se ti risuona, vieni a costruire con me.",
    },
  },
};

export function getAbout(lang: Lang): AboutContent {
  return about[lang] ?? about[defaultLang]!;
}
