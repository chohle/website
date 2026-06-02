# chohle website

This is the source code that runs the [chohle](https://chohle.ch) marketing site
and documentation.

Looking for the app itself? **chohle** is open source invoicing, projects and
client email for Swiss freelancers and small teams. That lives in
[`chohle/chohle`](https://github.com/chohle/chohle), with a live demo at
[app.chohle.ch](https://app.chohle.ch). This repository is just the public
website: the landing pages, the docs, and the localized content. You're welcome
to use it as inspiration for your own site.

## Built with

The whole site is built on **[Astro](https://astro.build)**. A huge thank you to
the Astro team; it does the heavy lifting here.

- **[Astro](https://astro.build)**: content first web framework (static output)
- **[Tailwind CSS](https://tailwindcss.com)** with **[Tailwind Plus Elements](https://tailwindcss.com/plus)**: styling and UI primitives
- **[`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)** with **[Cloudflare Workers](https://workers.cloudflare.com)**: build adapter and hosting
- **[`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**: sitemap generation
- **[Inter](https://rsms.me/inter/)** and **Mona Sans** via [Fontsource](https://fontsource.org)

## Requirements

- [Node.js](https://nodejs.org) 20 or newer
- npm

## Develop locally

```bash
# clone
git clone https://github.com/chohle/website.git
cd website

# install dependencies
npm install

# start the dev server at http://localhost:4321
npm run dev
```

## Build and preview

```bash
npm run build      # build static output into dist/
npm run preview    # build, then serve it on the Cloudflare runtime (wrangler dev)
```

## Deploy

The site is hosted on **Cloudflare Workers**. With [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
authenticated against the target Cloudflare account, a single command builds and
ships it:

```bash
npm run deploy     # build, then deploy
```

## Project structure

```
src/
  components/         UI and page sections (Hero, Features, Footer, Lightbox, Seo, …)
  components/pages/   one component per top level page
  components/docs/    one component per docs article
  layouts/           Layout.astro (marketing) and DocsLayout.astro (docs)
  pages/             routes; default locale at the root, others under src/pages/[lang]
  i18n/              translated content and helpers
  styles/            global Tailwind styles
public/              static assets (screenshots, favicon, robots.txt)
```

## Internationalization

Content ships in four languages: **English** (default), **German**, **French**
and **Italian**. The default locale is served at the root (for example `/about`)
and the others under a language prefix (`/de/about`, `/fr/about`, `/it/about`).
Translations live in `src/i18n`.

## License

Open source under the [MIT License](LICENSE), like chohle itself.
