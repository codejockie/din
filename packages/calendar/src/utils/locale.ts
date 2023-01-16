import { FirstDayOfWeek } from "../enums";
import { firstDayOfWeek, Locale } from "../locales";
import {
  getDaysInMonth,
  getFirstDayOfWeekInMonth,
  getLastDayOfWeekInMonth,
  subMonth,
} from "./date";

const SUNDAY = 0;
const MONDAY = 1;
const SATURDAY = 6;

export type Params = {
  date: Date;
  locale: Locale;
  firstDay?: FirstDayOfWeek;
};

const getFirstDayOfWeek = (locale: Locale, firstDay?: FirstDayOfWeek) => {
  if (firstDay) {
    switch (firstDay) {
      case "mon":
        return MONDAY;
      case "sat":
        return SATURDAY;
      case "sun":
        return SUNDAY;

      default:
        return SUNDAY;
    }
  }
  return firstDayOfWeek[locale] ?? MONDAY;
};

export const getBlankDaysStart = ({ date, locale, firstDay }: Params) => {
  const lastMonth = subMonth(date);
  const daysInPrevMonth = getDaysInMonth(lastMonth);
  const prevMonthLastDayOfWeek = getLastDayOfWeekInMonth(lastMonth);
  const startDay = daysInPrevMonth - prevMonthLastDayOfWeek;
  return startDay + getFirstDayOfWeek(locale, firstDay);
};

export const getBlankDaysLimit = ({ date, locale, firstDay }: Params) => {
  const weekStartsOn = getFirstDayOfWeek(locale, firstDay);
  const dayOfWeek = getFirstDayOfWeekInMonth(date);
  const mod = dayOfWeek % 6;

  switch (weekStartsOn) {
    case SUNDAY:
      return dayOfWeek;
    case SATURDAY:
      if (mod === SUNDAY) {
        return dayOfWeek === SUNDAY ? MONDAY : 0;
      }
      return mod + MONDAY;

    case MONDAY:
    default:
      if (mod === SUNDAY) {
        return dayOfWeek === SATURDAY ? 5 : SATURDAY;
      }
      return mod - MONDAY;
  }
};
