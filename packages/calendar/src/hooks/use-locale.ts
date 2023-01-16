import { Locale, locales } from "../locales";

export const useLocale = () => {
  const locale = new Intl.NumberFormat().resolvedOptions().locale as Locale;

  if (!locales[locale]) {
    const shortForm = locale.substring(0, 2);
    switch (shortForm) {
      case "ar":
        return "ar";
      case "en":
        return "en-GB";
      case "es":
        return "es";
      case "fr":
        return "fr";
      case "it":
        return "it";
      case "ja":
        return "ja";
      case "zh":
        return "zh";

      default:
        return "en-GB";
    }
  }
  return locale;
};
