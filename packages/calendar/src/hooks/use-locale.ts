import { LOCALISED_WEEK_DAYS } from "../utils";

export const LocaleMap: Record<string, keyof typeof LOCALISED_WEEK_DAYS> = {
  en: "en-GB",
  "en-GB": "en-GB",
  "en-US": "en-US",
  es: "es-ES",
  "es-ES": "es-ES",
  fr: "fr-FR",
  "fr-FR": "fr-FR",
  // it: "it-IT",
  // "it-IT": "it-IT",
  "ja-JP": "ja-JP",
};

export const useLocale = () => {
  const locale = new Intl.NumberFormat().resolvedOptions()
    .locale as typeof LocaleMap[keyof typeof LocaleMap];

  if (!LocaleMap[locale]) {
    return LocaleMap[locale.substring(0, 2)] ?? "en-GB";
  }
  return locale;
};
