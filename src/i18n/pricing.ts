import { defaultLang, type Lang } from "./config";

export interface PricingContent {
  meta: { title: string; description: string };
  hero: { headline: string; sub: string };
  selector: {
    selfHosted: { name: string; tagline: string; status: string };
    cloud: { name: string; tagline: string; status: string };
  };
  selfHostedPlan: {
    name: string;
    price: string;
    period: string;
    sub: string;
    features: string[];
  };
  cloud: { badge: string; headline: string; body: string; note: string; cta: string; email: string };
  faqsTitle: string;
  faqsIntro: string;
  faqs: { q: string; a: string }[];
}

const pricing: Partial<Record<Lang, PricingContent>> = {
  en: {
    meta: {
      title: "chohle: Pricing",
      description: "chohle is free and open source. Self-host it today. A managed Cloud is a someday-maybe, not a promise.",
    },
    hero: {
      headline: "Honest, open pricing.",
      sub: "Self-host chohle for free, forever. A managed Cloud might come one day, but right now this is a solo project built for self-hosting.",
    },
    selector: {
      selfHosted: { name: "Self-hosted", tagline: "Run it on your own infrastructure", status: "Free · available now" },
      cloud: { name: "Cloud", tagline: "Hosted by chohle, if it ever happens", status: "Maybe one day" },
    },
    selfHostedPlan: {
      name: "Self-hosted",
      price: "Free",
      period: "open source, forever",
      sub: "Run chohle on your own server. No seats, no limits, no expiry.",
      features: [
        "Unlimited invoices, projects & clients",
        "Swiss QR-bills & VAT",
        "Client email inbox",
        "All exports & open data",
        "Community support",
        "MIT licensed, free forever",
      ],
    },
    cloud: {
      badge: "Maybe one day",
      headline: "A hosted Cloud, maybe one day.",
      body: "Honestly, I'm not sure chohle Cloud will ever happen. Right now this is a solo project I build for fun, mostly meant for self-hosting, and the code isn't secure enough yet for me to run it for other people. Before I'd host anyone's data I'd want a stable version, and I'd want to do it properly through a GmbH. So treat Cloud as a someday-maybe, not a promise.",
      note: "No waitlist, no signup. If you're curious, just email me and ask.",
      cta: "Email me about it",
      email: "emanuell@ademi.me",
    },
    faqsTitle: "No surprises.",
    faqsIntro: "The honest answers to what people ask before they commit.",
    faqs: [
      { q: "Is chohle really free?", a: "Yes. Self-hosting is free and always will be, the whole thing is open source (MIT). No trial, no seat limits, no upsell." },
      { q: "What's the catch with self-hosting?", a: "You run chohle on your own server and handle the occasional update. It's also a work in progress, built largely with local LLMs while I learn, so expect rough edges and don't treat it as bulletproof yet." },
      { q: "Will there ever be a hosted Cloud?", a: "Maybe, but I can't promise it. chohle is a solo, for-fun project right now and it's built for self-hosting. A managed Cloud would need a stable, secure version and a proper company (a GmbH) behind it first. If you're interested, email me at emanuell@ademi.me and ask." },
      { q: "Can I move between self-hosted and Cloud later?", a: "Yes. Your data is yours and fully exportable, so you can migrate in either direction whenever it suits you." },
    ],
  },
  de: {
    meta: {
      title: "chohle: Preise",
      description: "chohle ist kostenlos und Open Source. Hoste es noch heute selbst. Eine verwaltete Cloud ist ein Vielleicht-irgendwann, kein Versprechen.",
    },
    hero: {
      headline: "Ehrliche, offene Preise.",
      sub: "Hoste chohle für immer kostenlos selbst. Eine verwaltete Cloud kommt vielleicht irgendwann, aber im Moment ist das ein Soloprojekt, gebaut fürs Selbsthosten.",
    },
    selector: {
      selfHosted: { name: "Self-hosted", tagline: "Auf deiner eigenen Infrastruktur betreiben", status: "Gratis · ab sofort verfügbar" },
      cloud: { name: "Cloud", tagline: "Von chohle gehostet, falls es je dazu kommt", status: "Vielleicht irgendwann" },
    },
    selfHostedPlan: {
      name: "Self-hosted",
      price: "Gratis",
      period: "Open Source, für immer",
      sub: "Betreibe chohle auf deinem eigenen Server. Keine Plätze, keine Limits, kein Ablaufdatum.",
      features: [
        "Unbegrenzte Rechnungen, Projekte & Kunden",
        "Schweizer QR-Rechnungen & MWST",
        "Kunden-E-Mail-Postfach",
        "Alle Exporte & offene Daten",
        "Community-Support",
        "MIT-lizenziert, für immer kostenlos",
      ],
    },
    cloud: {
      badge: "Vielleicht irgendwann",
      headline: "Eine gehostete Cloud, vielleicht irgendwann.",
      body: "Ehrlich gesagt weiß ich nicht, ob chohle Cloud je kommt. Im Moment ist das ein Soloprojekt, das ich zum Spaß baue, vor allem fürs Selbsthosten gedacht, und der Code ist noch nicht sicher genug, dass ich ihn für andere Leute betreiben würde. Bevor ich fremde Daten hoste, will ich eine stabile Version und das Ganze sauber über eine GmbH machen. Sieh die Cloud also als Vielleicht-irgendwann, nicht als Versprechen.",
      note: "Keine Warteliste, keine Anmeldung. Wenn dich das interessiert, schreib mir einfach.",
      cta: "Schreib mir dazu",
      email: "emanuell@ademi.me",
    },
    faqsTitle: "Keine Überraschungen.",
    faqsIntro: "Die ehrlichen Antworten auf das, was Leute fragen, bevor sie sich entscheiden.",
    faqs: [
      { q: "Ist chohle wirklich kostenlos?", a: "Ja. Self-Hosting ist kostenlos und bleibt es auch, das Ganze ist Open Source (MIT). Keine Testphase, keine Platzbeschränkung, kein Upselling." },
      { q: "Wo ist der Haken beim Self-Hosting?", a: "Du betreibst chohle auf deinem eigenen Server und kümmerst dich um das gelegentliche Update. Es ist außerdem in Arbeit, größtenteils mit lokalen LLMs gebaut, während ich lerne, also rechne mit Ecken und Kanten und sieh es noch nicht als kugelsicher an." },
      { q: "Wird es je eine gehostete Cloud geben?", a: "Vielleicht, aber versprechen kann ich es nicht. chohle ist gerade ein Solo-Spaßprojekt und fürs Selbsthosten gebaut. Eine verwaltete Cloud bräuchte zuerst eine stabile, sichere Version und eine richtige Firma (eine GmbH) dahinter. Wenn es dich interessiert, schreib mir an emanuell@ademi.me." },
      { q: "Kann ich später zwischen Self-hosted und Cloud wechseln?", a: "Ja. Deine Daten gehören dir und lassen sich vollständig exportieren, du kannst also jederzeit in beide Richtungen migrieren." },
    ],
  },
  fr: {
    meta: {
      title: "chohle: Tarifs",
      description: "chohle est gratuit et open source. Auto-hébergez-le dès aujourd'hui. Un Cloud managé est un peut-être un jour, pas une promesse.",
    },
    hero: {
      headline: "Des tarifs honnêtes et ouverts.",
      sub: "Auto-hébergez chohle gratuitement, pour toujours. Un Cloud managé viendra peut-être un jour, mais pour l'instant c'est un projet solo conçu pour l'auto-hébergement.",
    },
    selector: {
      selfHosted: { name: "Auto-hébergé", tagline: "Sur votre propre infrastructure", status: "Gratuit · disponible maintenant" },
      cloud: { name: "Cloud", tagline: "Hébergé par chohle, si cela voit le jour", status: "Peut-être un jour" },
    },
    selfHostedPlan: {
      name: "Auto-hébergé",
      price: "Gratuit",
      period: "open source, pour toujours",
      sub: "Faites tourner chohle sur votre propre serveur. Aucun siège, aucune limite, aucune expiration.",
      features: [
        "Factures, projets & clients illimités",
        "QR-factures suisses & TVA",
        "Boîte mail clients",
        "Tous les exports & données ouvertes",
        "Support communautaire",
        "Sous licence MIT, gratuit pour toujours",
      ],
    },
    cloud: {
      badge: "Peut-être un jour",
      headline: "Un Cloud hébergé, peut-être un jour.",
      body: "Honnêtement, je ne suis pas sûr que chohle Cloud voie le jour. Pour l'instant c'est un projet solo que je construis pour le plaisir, surtout pensé pour l'auto-hébergement, et le code n'est pas encore assez sûr pour que je le fasse tourner pour d'autres. Avant d'héberger les données de qui que ce soit, je voudrais une version stable, et faire les choses proprement via une GmbH. Voyez donc le Cloud comme un peut-être un jour, pas une promesse.",
      note: "Pas de liste d'attente, pas d'inscription. Si ça vous intéresse, écrivez-moi simplement.",
      cta: "Écrivez-moi à ce sujet",
      email: "emanuell@ademi.me",
    },
    faqsTitle: "Aucune surprise.",
    faqsIntro: "Les réponses honnêtes aux questions que l'on se pose avant de se lancer.",
    faqs: [
      { q: "chohle est-il vraiment gratuit ?", a: "Oui. L'auto-hébergement est gratuit et le restera, le tout est open source (MIT). Pas d'essai, pas de limite de sièges, pas de vente incitative." },
      { q: "Quel est le piège avec l'auto-hébergement ?", a: "Vous faites tourner chohle sur votre propre serveur et gérez les mises à jour occasionnelles. C'est aussi un travail en cours, construit en grande partie avec des LLM locaux pendant que j'apprends, attendez-vous donc à des aspérités et ne le considérez pas encore comme inattaquable." },
      { q: "Y aura-t-il un jour un Cloud hébergé ?", a: "Peut-être, mais je ne peux pas le promettre. chohle est pour l'instant un projet solo pour le plaisir, conçu pour l'auto-hébergement. Un Cloud managé exigerait d'abord une version stable et sûre et une vraie société (une GmbH) derrière. Si ça vous intéresse, écrivez-moi à emanuell@ademi.me." },
      { q: "Puis-je passer de l'auto-hébergement au Cloud plus tard ?", a: "Oui. Vos données vous appartiennent et sont entièrement exportables, vous pouvez donc migrer dans les deux sens quand cela vous convient." },
    ],
  },
  it: {
    meta: {
      title: "chohle: Prezzi",
      description: "chohle è gratuito e open source. Ospitalo da te oggi stesso. Un Cloud gestito è un forse un giorno, non una promessa.",
    },
    hero: {
      headline: "Prezzi onesti e aperti.",
      sub: "Ospita chohle da solo, gratis e per sempre. Un Cloud gestito forse arriverà un giorno, ma per ora questo è un progetto solo, pensato per il self-hosting.",
    },
    selector: {
      selfHosted: { name: "Self-hosting", tagline: "Eseguilo sulla tua infrastruttura", status: "Gratis · disponibile ora" },
      cloud: { name: "Cloud", tagline: "Ospitato da chohle, se mai accadrà", status: "Forse un giorno" },
    },
    selfHostedPlan: {
      name: "Self-hosting",
      price: "Gratis",
      period: "open source, per sempre",
      sub: "Esegui chohle sul tuo server. Nessun posto, nessun limite, nessuna scadenza.",
      features: [
        "Fatture, progetti e clienti illimitati",
        "QR-fatture svizzere e IVA",
        "Casella e-mail dei clienti",
        "Tutte le esportazioni e dati aperti",
        "Supporto della community",
        "Licenza MIT, gratis per sempre",
      ],
    },
    cloud: {
      badge: "Forse un giorno",
      headline: "Un Cloud ospitato, forse un giorno.",
      body: "Onestamente, non so se chohle Cloud accadrà mai. Per ora è un progetto solo che costruisco per divertimento, pensato soprattutto per il self-hosting, e il codice non è ancora abbastanza sicuro perché io lo gestisca per altre persone. Prima di ospitare i dati di qualcuno vorrei una versione stabile e farlo come si deve tramite una GmbH. Quindi considera il Cloud un forse un giorno, non una promessa.",
      note: "Nessuna lista d'attesa, nessuna iscrizione. Se ti interessa, scrivimi e basta.",
      cta: "Scrivimi a riguardo",
      email: "emanuell@ademi.me",
    },
    faqsTitle: "Nessuna sorpresa.",
    faqsIntro: "Le risposte oneste a ciò che le persone chiedono prima di decidere.",
    faqs: [
      { q: "chohle è davvero gratuito?", a: "Sì. Il self-hosting è gratuito e lo sarà sempre, il tutto è open source (MIT). Nessuna prova, nessun limite di posti, nessun upselling." },
      { q: "Qual è il trucco del self-hosting?", a: "Esegui chohle sul tuo server e ti occupi dell'aggiornamento occasionale. È anche un lavoro in corso, costruito in gran parte con LLM locali mentre imparo, quindi aspettati qualche imperfezione e non considerarlo ancora a prova di proiettile." },
      { q: "Ci sarà mai un Cloud ospitato?", a: "Forse, ma non posso prometterlo. chohle per ora è un progetto solo per divertimento, pensato per il self-hosting. Un Cloud gestito richiederebbe prima una versione stabile e sicura e una vera azienda (una GmbH) alle spalle. Se ti interessa, scrivimi a emanuell@ademi.me." },
      { q: "Posso passare in seguito da self-hosting a Cloud?", a: "Sì. I tuoi dati sono tuoi e completamente esportabili, quindi puoi migrare in entrambe le direzioni quando ti conviene." },
    ],
  },
};

export function getPricing(lang: Lang): PricingContent {
  return pricing[lang] ?? pricing[defaultLang]!;
}
