import { defaultLang, type Lang } from "../i18n/config";
import { AVAILABLE } from "./screenshots-manifest";

// Screenshots live in public/ and are captured per language as
// <name>-<lang>.jpg (see scripts/screenshots-local.mjs). The docs render the
// shot for the page's language so a German reader sees the German app.
//
// Availability is read from a generated manifest rather than the filesystem:
// the Cloudflare SSR build runs in an isolated sandbox where public/ is not
// reachable, so a runtime fs check would always miss. Regenerate the manifest
// with `node scripts/gen-manifest.mjs` after capturing new screenshots.

/** Localized screenshot URL for a screen, falling back to the English capture
 *  when a translated one isn't present, so the docs never show a broken image. */
export function shot(name: string, lang: Lang | string = defaultLang): string {
  if (lang && lang !== defaultLang && AVAILABLE.has(`${name}-${lang}`)) {
    return `/screenshots/${name}-${lang}.jpg`;
  }
  return `/screenshots/${name}-${defaultLang}.jpg`;
}
