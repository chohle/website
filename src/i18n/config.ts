export const languages = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";
export const langs = Object.keys(languages) as Lang[];
