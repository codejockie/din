import ar from "./ar.json";
import enGB from "./en-GB.json";
import enUS from "./en-US.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";
import ja from "./ja.json";
import zh from "./zh.json";

const SUNDAY = 0;
const MONDAY = 1;
const SATURDAY = 6;

export const firstDayOfWeek = {
  ar: SATURDAY,
  "en-GB": MONDAY,
  "en-US": SUNDAY,
  es: MONDAY,
  fr: MONDAY,
  it: MONDAY,
  ja: SUNDAY,
  zh: SUNDAY,
};

export const locales = {
  ar,
  "en-GB": enGB,
  "en-US": enUS,
  es,
  fr,
  it,
  ja,
  zh,
};

export type Locale = keyof typeof locales;
