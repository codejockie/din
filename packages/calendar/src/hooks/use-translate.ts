import { Locale } from "../locales";
import { translate } from "../utils";

export const useTranslate = (locale: Locale) => {
  return (key: string) => {
    return translate(key, locale);
  };
};
