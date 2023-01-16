import { Locale, locales } from "../locales";

export const translate = (key: string, locale: Locale) => {
  const keys = key.split(".");
  const text = keys.reduce((obj, i) => obj[i], locales[locale] as any);
  return text;
};
