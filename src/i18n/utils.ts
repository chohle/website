import { defaultLang, langs, type Lang } from "./config";
import { localizePath, canonicalizePath } from "./routes";

/** Detect the current language from a URL pathname (/de/... -> "de"). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/")[1];
  return (langs as string[]).includes(seg) ? (seg as Lang) : defaultLang;
}

/** Localize a canonical root-relative href ("/pricing") for a language,
 *  translating the slug and adding the language prefix ("/de/preise"). */
export function localize(href: string, lang: Lang): string {
  const path = localizePath(href, lang);
  if (lang === defaultLang) return path;
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

/** Strip any language prefix and de-localize the slug, returning the bare
 *  canonical path ("/de/preise" -> "/pricing"). */
export function stripLang(pathname: string): string {
  const parts = pathname.split("/");
  if ((langs as string[]).includes(parts[1]) && parts[1] !== defaultLang) {
    const lang = parts[1] as Lang;
    const rest = "/" + parts.slice(2).join("/");
    const cleaned = rest === "/" ? "/" : rest.replace(/\/$/, "");
    return canonicalizePath(cleaned, lang);
  }
  return pathname.replace(/\/$/, "") || "/";
}

/** Given the current URL, produce the equivalent path in another language. */
export function switchLocalePath(url: URL, lang: Lang): string {
  return localize(stripLang(url.pathname), lang);
}
