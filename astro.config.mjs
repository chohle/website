// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Canonical production domain — used for sitemap.xml, canonical URLs and
  // Open Graph / social tags.
  site: 'https://chohle.ch',
  // @astrojs/sitemap auto-discovers all pages into sitemap-0.xml (indexed by
  // sitemap-index.xml). A small /sitemap.xml endpoint exposes that under the
  // conventional name; filter it out so it doesn't list itself.
  integrations: [sitemap({ filter: (page) => !page.endsWith("/sitemap.xml") })],
  i18n: {
    locales: ['en', 'de', 'fr', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // The About page was removed; send any indexed links to the home page.
  redirects: {
    '/about': '/',
    '/de/ueber-uns': '/de',
    '/fr/a-propos': '/fr',
    '/it/chi-siamo': '/it',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // This static site never uses sessions. Pick a non-KV (in-memory) driver so
  // the Cloudflare adapter doesn't auto-require a "SESSION" KV namespace — that
  // avoids committing an account-specific namespace id to a public repo.
  session: {
    driver: sessionDrivers.memory(),
  },

  adapter: cloudflare()
});