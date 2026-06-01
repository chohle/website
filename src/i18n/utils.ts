import { defaultLang, langs, type Lang } from "./config";

/** Detect the current language from a URL pathname (/de/... -> "de"). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/")[1];
  return (langs as string[]).includes(seg) ? (seg as Lang) : defaultLang;
}

/** Localize a root-relative href ("/pricing") for a language. */
export function localize(href: string, lang: Lang): string {
  if (lang === defaultLang) return href;
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}

/** Strip any language prefix from a pathname, returning the bare path ("/pricing"). */
export function stripLang(pathname: string): string {
  const parts = pathname.split("/");
  if ((langs as string[]).includes(parts[1]) && parts[1] !== defaultLang) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return pathname.replace(/\/$/, "") || "/";
}

/** Given the current URL, produce the equivalent path in another language. */
export function switchLocalePath(url: URL, lang: Lang): string {
  return localize(stripLang(url.pathname), lang);
}
