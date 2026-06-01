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
  cloud: { badge: string; headline: string; body: string; note: string };
  faqsTitle: string;
  faqsIntro: string;
  faqs: { q: string; a: string }[];
}

const pricing: Partial<Record<Lang, PricingContent>> = {
  en: {
    meta: {
      title: "chohle — Pricing",
      description: "chohle is free and open source. Self-host it today; managed Cloud hosting is coming soon.",
    },
    hero: {
      headline: "Honest, open pricing.",
      sub: "Self-host chohle for free, forever. Prefer not to run a server? A fully managed Cloud is on the way.",
    },
    selector: {
      selfHosted: { name: "Self-hosted", tagline: "Run it on your own infrastructure", status: "Free · available now" },
      cloud: { name: "Cloud", tagline: "Hosted by chohle, always up to date", status: "Coming soon" },
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
        "MIT licensed — free forever",
      ],
    },
    cloud: {
      badge: "Coming soon",
      headline: "chohle Cloud is on the way.",
      body: "A fully managed chohle — secure, always up to date, zero maintenance. We'll handle hosting, backups, and updates so you don't have to.",
      note: "Until then, chohle is free to self-host.",
    },
    faqsTitle: "No surprises.",
    faqsIntro: "The honest answers to what people ask before they commit.",
    faqs: [
      { q: "Is chohle really free?", a: "Yes. Self-hosting is free and always will be — the whole thing is open source (MIT). No trial, no seat limits, no upsell." },
      { q: "What's the catch with self-hosting?", a: "You run chohle on your own server and handle the occasional update. If that's not your thing, managed Cloud hosting is on the way." },
      { q: "When is Cloud launching?", a: "We're building it now. Join the waitlist and we'll email you the moment chohle Cloud is ready — along with its pricing." },
      { q: "Can I move between self-hosted and Cloud later?", a: "Yes. Your data is yours and fully exportable, so you can migrate in either direction whenever it suits you." },
    ],
  },
  de: {
    meta: {
      title: "chohle — Preise",
      description: "chohle ist kostenlos und Open Source. Hoste es noch heute selbst; das verwaltete Cloud-Hosting kommt bald.",
    },
    hero: {
      headline: "Ehrliche, offene Preise.",
      sub: "Hoste chohle für immer kostenlos selbst. Lieber keinen Server betreiben? Eine vollständig verwaltete Cloud ist unterwegs.",
    },
    selector: {
      selfHosted: { name: "Self-hosted", tagline: "Auf deiner eigenen Infrastruktur betreiben", status: "Gratis · ab sofort verfügbar" },
      cloud: { name: "Cloud", tagline: "Von chohle gehostet, immer aktuell", status: "Bald verfügbar" },
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
        "MIT-lizenziert — für immer kostenlos",
      ],
    },
    cloud: {
      badge: "Bald verfügbar",
      headline: "chohle Cloud ist unterwegs.",
      body: "Ein vollständig verwaltetes chohle — sicher, immer aktuell, ohne Wartung. Wir kümmern uns um Hosting, Backups und Updates, damit du es nicht musst.",
      note: "Bis dahin lässt sich chohle kostenlos selbst hosten.",
    },
    faqsTitle: "Keine Überraschungen.",
    faqsIntro: "Die ehrlichen Antworten auf das, was Leute fragen, bevor sie sich entscheiden.",
    faqs: [
      { q: "Ist chohle wirklich kostenlos?", a: "Ja. Self-Hosting ist kostenlos und bleibt es auch — das Ganze ist Open Source (MIT). Keine Testphase, keine Platzbeschränkung, kein Upselling." },
      { q: "Wo ist der Haken beim Self-Hosting?", a: "Du betreibst chohle auf deinem eigenen Server und kümmerst dich um das gelegentliche Update. Wenn das nichts für dich ist: Das verwaltete Cloud-Hosting ist unterwegs." },
      { q: "Wann startet die Cloud?", a: "Wir bauen sie gerade. Trag dich auf die Warteliste ein und wir schreiben dir, sobald chohle Cloud bereit ist — samt Preisen." },
      { q: "Kann ich später zwischen Self-hosted und Cloud wechseln?", a: "Ja. Deine Daten gehören dir und lassen sich vollständig exportieren, du kannst also jederzeit in beide Richtungen migrieren." },
    ],
  },
  fr: {
    meta: {
      title: "chohle — Tarifs",
      description: "chohle est gratuit et open source. Auto-hébergez-le dès aujourd'hui ; l'hébergement Cloud managé arrive bientôt.",
    },
    hero: {
      headline: "Des tarifs honnêtes et ouverts.",
      sub: "Auto-hébergez chohle gratuitement, pour toujours. Vous préférez ne pas gérer de serveur ? Un Cloud entièrement managé arrive.",
    },
    selector: {
      selfHosted: { name: "Auto-hébergé", tagline: "Sur votre propre infrastructure", status: "Gratuit · disponible maintenant" },
      cloud: { name: "Cloud", tagline: "Hébergé par chohle, toujours à jour", status: "Bientôt disponible" },
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
        "Sous licence MIT — gratuit pour toujours",
      ],
    },
    cloud: {
      badge: "Bientôt disponible",
      headline: "chohle Cloud arrive.",
      body: "Un chohle entièrement managé — sécurisé, toujours à jour, sans maintenance. Nous gérons l'hébergement, les sauvegardes et les mises à jour pour que vous n'ayez pas à le faire.",
      note: "En attendant, chohle est gratuit à auto-héberger.",
    },
    faqsTitle: "Aucune surprise.",
    faqsIntro: "Les réponses honnêtes aux questions que l'on se pose avant de se lancer.",
    faqs: [
      { q: "chohle est-il vraiment gratuit ?", a: "Oui. L'auto-hébergement est gratuit et le restera — le tout est open source (MIT). Pas d'essai, pas de limite de sièges, pas de vente incitative." },
      { q: "Quel est le piège avec l'auto-hébergement ?", a: "Vous faites tourner chohle sur votre propre serveur et gérez les mises à jour occasionnelles. Si ce n'est pas pour vous, l'hébergement Cloud managé arrive." },
      { q: "Quand le Cloud sera-t-il lancé ?", a: "Nous le construisons en ce moment. Rejoignez la liste d'attente et nous vous écrirons dès que chohle Cloud sera prêt — avec ses tarifs." },
      { q: "Puis-je passer de l'auto-hébergement au Cloud plus tard ?", a: "Oui. Vos données vous appartiennent et sont entièrement exportables, vous pouvez donc migrer dans les deux sens quand cela vous convient." },
    ],
  },
  it: {
    meta: {
      title: "chohle — Prezzi",
      description: "chohle è gratuito e open source. Ospitalo da te oggi stesso; l'hosting Cloud gestito arriva presto.",
    },
    hero: {
      headline: "Prezzi onesti e aperti.",
      sub: "Ospita chohle da solo, gratis e per sempre. Preferisci non gestire un server? Un Cloud completamente gestito è in arrivo.",
    },
    selector: {
      selfHosted: { name: "Self-hosting", tagline: "Eseguilo sulla tua infrastruttura", status: "Gratis · disponibile ora" },
      cloud: { name: "Cloud", tagline: "Ospitato da chohle, sempre aggiornato", status: "In arrivo" },
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
        "Licenza MIT — gratis per sempre",
      ],
    },
    cloud: {
      badge: "In arrivo",
      headline: "chohle Cloud è in arrivo.",
      body: "Un chohle completamente gestito — sicuro, sempre aggiornato, zero manutenzione. Pensiamo noi a hosting, backup e aggiornamenti, così non devi farlo tu.",
      note: "Nel frattempo, chohle è gratuito da ospitare in self-hosting.",
    },
    faqsTitle: "Nessuna sorpresa.",
    faqsIntro: "Le risposte oneste a ciò che le persone chiedono prima di decidere.",
    faqs: [
      { q: "chohle è davvero gratuito?", a: "Sì. Il self-hosting è gratuito e lo sarà sempre — il tutto è open source (MIT). Nessuna prova, nessun limite di posti, nessun upselling." },
      { q: "Qual è il trucco del self-hosting?", a: "Esegui chohle sul tuo server e ti occupi dell'aggiornamento occasionale. Se non fa per te, l'hosting Cloud gestito è in arrivo." },
      { q: "Quando arriva il Cloud?", a: "Lo stiamo costruendo ora. Iscriviti alla lista d'attesa e ti scriveremo appena chohle Cloud sarà pronto — insieme ai prezzi." },
      { q: "Posso passare in seguito da self-hosting a Cloud?", a: "Sì. I tuoi dati sono tuoi e completamente esportabili, quindi puoi migrare in entrambe le direzioni quando ti conviene." },
    ],
  },
};

export function getPricing(lang: Lang): PricingContent {
  return pricing[lang] ?? pricing[defaultLang]!;
}
