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
      title: "chohle: About",
      description: "chohle started as a way to learn Node.js and Nuxt for fun, a private side project from a PHP and TYPO3 backend developer, and grew into a calm, open-source invoicing and projects tool anyone can use.",
    },
    hero: {
      eyebrow: "About",
      headline: "Built to learn, and to be used.",
      intro: "Hi, I'm Emanuell. By day I'm a backend developer working mostly with PHP and TYPO3. chohle is a private side project I build for fun, a way to learn Node.js and Nuxt by making something real instead of following yet another tutorial. It's open source, so anyone can use it.",
    },
    story: [
      "I learn best by building. By day I work as a backend developer, mostly in <strong>PHP with TYPO3</strong>, so <strong>Node.js and Nuxt</strong> were new territory I wanted to explore in my own time.",
      "Instead of grinding through another throwaway tutorial, I picked a real problem to chip away at: the invoicing, projects, and client email that small businesses wrestle with. chohle is me building that in my spare time, for fun, and learning a new stack along the way.",
      "It's <strong>open source</strong> for the same reason I started it, to learn in the open. Read the code, poke holes in it, suggest improvements, or just self-host it and use it. That's the whole point.",
      "One honest note: this is very much a <strong>work in progress</strong>, and I build a lot of it with <strong>local LLMs</strong> while I'm also teaching myself to self-host models at home. So the code isn't bulletproof, security isn't 100 percent figured out, and there are bugs I haven't found yet. If you spot something off, please open an issue or send a friendly note. No cursing me out. I'm learning in public, and a bit of kindness goes a long way.",
    ],
    principlesEyebrow: "What I care about",
    principlesHeading: "A few things I won't budge on.",
    principles: [
      { title: "Open by default", desc: "Every line is public. It's how I learn: and it means the tool genuinely belongs to whoever uses it." },
      { title: "Calm by design", desc: "No dashboards screaming for attention. chohle does the few things you need, quietly, and gets out of the way." },
      { title: "Built for Switzerland", desc: "QR-bills, VAT, the formats and rules Swiss businesses actually deal with: handled properly, not bolted on." },
      { title: "Yours to keep", desc: "Your data lives on your server, in open formats, exportable any time. No lock-in, no hostage-taking." },
    ],
    mission: {
      statement: "chohle is me learning in public, and building something genuinely useful while I'm at it. If that resonates, come build with me.",
    },
  },
  de: {
    meta: {
      title: "chohle: Über uns",
      description: "chohle begann als Weg, Node.js und Nuxt zum Spass zu lernen, ein privates Nebenprojekt eines Backend-Entwicklers, der sonst mit PHP und TYPO3 arbeitet, und wurde zu einem ruhigen, quelloffenen Tool für Rechnungen und Projekte, das jeder nutzen kann.",
    },
    hero: {
      eyebrow: "Über uns",
      headline: "Gebaut, um zu lernen, und genutzt zu werden.",
      intro: "Hoi, ich bin Emanuell. Im Hauptberuf bin ich Backend-Entwickler und arbeite vor allem mit PHP und TYPO3. chohle ist ein privates Nebenprojekt, das ich zum Spass baue, um Node.js und Nuxt zu lernen, indem ich etwas Echtes mache statt noch einem Tutorial zu folgen. Es ist Open Source, also kann es jeder nutzen.",
    },
    story: [
      "Am besten lerne ich, indem ich baue. Im Hauptberuf bin ich Backend-Entwickler, meist mit <strong>PHP und TYPO3</strong>, also waren <strong>Node.js und Nuxt</strong> für mich neues Terrain, das ich in meiner Freizeit erkunden wollte.",
      "Statt mich durch noch ein Wegwerf-Tutorial zu quälen, habe ich mir ein echtes Problem zum Dranbleiben ausgesucht: die Rechnungen, Projekte und Kunden-E-Mails, mit denen sich kleine Firmen herumschlagen. chohle ist mein Versuch, das in meiner Freizeit zu bauen, zum Spass, und nebenbei einen neuen Stack zu lernen.",
      "Es ist aus demselben Grund <strong>Open Source</strong>, aus dem ich angefangen habe, um offen zu lernen. Lies den Code, finde Schwachstellen, schlag Verbesserungen vor, oder hoste es einfach selbst und nutze es. Genau darum geht es.",
      "Eine ehrliche Anmerkung: Das hier ist klar <strong>in Arbeit</strong>, und ich baue vieles davon mit <strong>lokalen LLMs</strong>, während ich mir gleichzeitig beibringe, Modelle zu Hause selbst zu hosten. Der Code ist also nicht kugelsicher, die Sicherheit ist nicht zu 100 Prozent durchdacht, und es gibt Bugs, die ich noch nicht gefunden habe. Wenn dir etwas auffällt, öffne bitte ein Issue oder schreib mir freundlich. Kein Beschimpfen. Ich lerne in der Öffentlichkeit, und ein bisschen Freundlichkeit hilft enorm.",
    ],
    principlesEyebrow: "Was mir wichtig ist",
    principlesHeading: "Ein paar Dinge, bei denen ich nicht nachgebe.",
    principles: [
      { title: "Offen von Haus aus", desc: "Jede Zeile ist öffentlich. So lerne ich: und es bedeutet, dass das Tool wirklich dem gehört, der es nutzt." },
      { title: "Ruhig gestaltet", desc: "Keine Dashboards, die um Aufmerksamkeit schreien. chohle erledigt die wenigen Dinge, die du brauchst, leise, und geht dir aus dem Weg." },
      { title: "Für die Schweiz gebaut", desc: "QR-Rechnungen, MWST, die Formate und Regeln, mit denen Schweizer Unternehmen wirklich zu tun haben: sauber gelöst, nicht draufgesetzt." },
      { title: "Bleibt dein", desc: "Deine Daten liegen auf deinem Server, in offenen Formaten, jederzeit exportierbar. Kein Lock-in, keine Geiselnahme." },
    ],
    mission: {
      statement: "chohle ist mein Lernen in der Öffentlichkeit, und dabei baue ich etwas wirklich Nützliches. Wenn dich das anspricht, bau mit mir.",
    },
  },
  fr: {
    meta: {
      title: "chohle: À propos",
      description: "chohle a commencé comme une façon d'apprendre Node.js et Nuxt pour le plaisir, un projet perso d'un développeur backend qui travaille surtout avec PHP et TYPO3, et est devenu un outil de facturation et de projets serein et open source, utilisable par tous.",
    },
    hero: {
      eyebrow: "À propos",
      headline: "Conçu pour apprendre, et pour être utilisé.",
      intro: "Salut, je suis Emanuell. Dans mon métier, je suis développeur backend, surtout avec PHP et TYPO3. chohle est un projet perso que je construis pour le plaisir, une façon d'apprendre Node.js et Nuxt en créant quelque chose de réel plutôt qu'en suivant un énième tutoriel. C'est open source, donc tout le monde peut l'utiliser.",
    },
    story: [
      "J'apprends mieux en construisant. Au quotidien, je suis développeur backend, surtout en <strong>PHP avec TYPO3</strong>, alors <strong>Node.js et Nuxt</strong> étaient un terrain nouveau que je voulais explorer sur mon temps libre.",
      "Plutôt que de m'acharner sur un énième tutoriel jetable, j'ai choisi un vrai problème sur lequel avancer : la facturation, les projets et l'e-mail client auxquels les petites entreprises sont confrontées. chohle, c'est moi qui le construis sur mon temps libre, pour le plaisir, en apprenant une nouvelle stack au passage.",
      "C'est <strong>open source</strong> pour la même raison qui m'a fait commencer, apprendre au grand jour. Lisez le code, cherchez-y des failles, proposez des améliorations, ou hébergez-le simplement et utilisez-le. C'est tout l'intérêt.",
      "Une note honnête : tout ceci est clairement <strong>en cours de construction</strong>, et j'en bâtis une grande partie avec des <strong>LLM locaux</strong>, tout en apprenant à héberger moi-même des modèles à la maison. Le code n'est donc pas inattaquable, la sécurité n'est pas réglée à 100 pour cent, et il reste des bugs que je n'ai pas encore trouvés. Si vous repérez quelque chose, ouvrez une issue ou écrivez-moi gentiment. Pas d'insultes. J'apprends au grand jour, et un peu de bienveillance change tout.",
    ],
    principlesEyebrow: "Ce qui compte pour moi",
    principlesHeading: "Quelques principes auxquels je ne dérogerai pas.",
    principles: [
      { title: "Ouvert par défaut", desc: "Chaque ligne est publique. C'est ainsi que j'apprends: et cela signifie que l'outil appartient vraiment à celui qui l'utilise." },
      { title: "Pensé pour la sérénité", desc: "Pas de tableaux de bord qui réclament votre attention. chohle fait les quelques choses dont vous avez besoin, discrètement, puis s'efface." },
      { title: "Conçu pour la Suisse", desc: "QR-factures, TVA, les formats et règles auxquels les entreprises suisses sont réellement confrontées: traités correctement, pas rajoutés à la va-vite." },
      { title: "Vous restent acquis", desc: "Vos données vivent sur votre serveur, en formats ouverts, exportables à tout moment. Aucun verrouillage, aucune prise d'otage." },
    ],
    mission: {
      statement: "chohle, c'est moi qui apprends au grand jour, tout en construisant quelque chose de vraiment utile. Si ça vous parle, venez construire avec moi.",
    },
  },
  it: {
    meta: {
      title: "chohle: Chi siamo",
      description: "chohle è nato come un modo per imparare Node.js e Nuxt per divertimento, un progetto personale di uno sviluppatore backend che di solito lavora con PHP e TYPO3, ed è diventato uno strumento sereno e open source per fatture e progetti, usabile da chiunque.",
    },
    hero: {
      eyebrow: "Chi siamo",
      headline: "Costruito per imparare, e per essere usato.",
      intro: "Ciao, sono Emanuell. Di mestiere sono sviluppatore backend e lavoro soprattutto con PHP e TYPO3. chohle è un progetto personale che costruisco per divertimento, un modo per imparare Node.js e Nuxt creando qualcosa di reale invece di seguire l'ennesimo tutorial. È open source, quindi chiunque può usarlo.",
    },
    story: [
      "Imparo meglio costruendo. Di mestiere sono sviluppatore backend, soprattutto in <strong>PHP con TYPO3</strong>, così <strong>Node.js e Nuxt</strong> erano un terreno nuovo che volevo esplorare nel tempo libero.",
      "Invece di sfiancarmi con l'ennesimo tutorial usa e getta, ho scelto un problema reale su cui lavorare: le fatture, i progetti e l'e-mail dei clienti con cui le piccole imprese si scontrano. chohle è il mio modo di costruirlo nel tempo libero, per divertimento, imparando una nuova stack lungo il percorso.",
      "È <strong>open source</strong> per lo stesso motivo per cui ho iniziato, per imparare allo scoperto. Leggi il codice, cercane i punti deboli, proponi miglioramenti, oppure ospitalo da solo e usalo. È proprio questo il punto.",
      "Una nota onesta: questo è chiaramente un <strong>lavoro in corso</strong>, e ne costruisco gran parte con <strong>LLM locali</strong>, mentre imparo anche a ospitare da solo i modelli a casa. Il codice quindi non è a prova di proiettile, la sicurezza non è risolta al 100 per cento, e ci sono bug che non ho ancora trovato. Se noti qualcosa che non va, apri pure una issue o scrivimi in modo gentile. Niente insulti. Sto imparando allo scoperto, e un po' di gentilezza fa una grande differenza.",
    ],
    principlesEyebrow: "Ciò a cui tengo",
    principlesHeading: "Alcune cose su cui non transigo.",
    principles: [
      { title: "Aperto per natura", desc: "Ogni riga è pubblica. È così che imparo: e significa che lo strumento appartiene davvero a chi lo usa." },
      { title: "Sereno per scelta", desc: "Nessuna dashboard che urla per attirare l'attenzione. chohle fa le poche cose di cui hai bisogno, in silenzio, e si toglie di mezzo." },
      { title: "Pensato per la Svizzera", desc: "QR-fatture, IVA, i formati e le regole con cui le aziende svizzere hanno davvero a che fare: gestiti come si deve, non aggiunti all'ultimo." },
      { title: "Restano tuoi", desc: "I tuoi dati vivono sul tuo server, in formati aperti, esportabili in qualsiasi momento. Nessun lock-in, nessun sequestro." },
    ],
    mission: {
      statement: "chohle sono io che imparo allo scoperto, costruendo nel frattempo qualcosa di davvero utile. Se ti risuona, vieni a costruire con me.",
    },
  },
};

export function getAbout(lang: Lang): AboutContent {
  return about[lang] ?? about[defaultLang]!;
}
