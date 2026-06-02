// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // No production domain yet — set `site` once one exists.
  i18n: {
    locales: ['en', 'de', 'fr', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
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