import {
  getDaysInMonth,
  getFirstDayOfWeekInMonth,
  getLastDayOfWeekInMonth,
  subMonth,
} from "./date";

const SUNDAY = 0;
const MONDAY = 1;
const SATURDAY = 6;

export const weekStart = {
  en: MONDAY,
  "en-GB": MONDAY,
  "en-US": SUNDAY,
  es: MONDAY,
  "es-ES": MONDAY,
  fr: MONDAY,
  "fr-FR": MONDAY,
  "ja-JP": SUNDAY,
};

export type Locale = keyof typeof weekStart;

export const getBlankDaysStart = (date: Date, locale: Locale) => {
  const lastMonth = subMonth(date);
  const daysInPrevMonth = getDaysInMonth(lastMonth);
  const prevMonthLastDayOfWeek = getLastDayOfWeekInMonth(lastMonth);
  const startDay = daysInPrevMonth - prevMonthLastDayOfWeek;
  return startDay + weekStart[locale];
};

export const getBlankDaysLimit = (date: Date, locale: Locale) => {
  const value = weekStart[locale];
  const dayOfWeek = getFirstDayOfWeekInMonth(date);
  const mod = dayOfWeek % 6;
  let limit: number;

  switch (value) {
    case MONDAY:
      if (mod === SUNDAY) {
        limit = dayOfWeek === SATURDAY ? 5 : SATURDAY;
      } else if (mod === SATURDAY) {
        limit = SUNDAY;
      } else {
        limit = mod - MONDAY;
      }
      return limit;

    default:
      return dayOfWeek;
  }
};
