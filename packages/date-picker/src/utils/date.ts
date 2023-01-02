import { Dayjs } from "dayjs";

const date = new Date();
export const currentDay = date.getDate();
export const currentMonth = date.getMonth();
export const currentYear = date.getFullYear();
export const fullWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDaysInMonth = (month = currentMonth, year = currentYear) => {
  // month is zero index based
  // 0 is the last day of previous month
  return new Date(year, month, 0).getDate();
};

export const getFirstDayWeekDay = (
  month = currentMonth,
  year = currentYear
) => {
  return new Date(year, month, 1).getDay();
};

export const getLastDayWeekDay = (month = currentMonth, year = currentYear) => {
  return new Date(year, month + 1, 0).getDay();
};

export const getYearRanges = (from = 1900, to = 2050) => {
  const length = to + 1 - from;
  return Array.from({ length }, (_, i) => from + i);
};

export function changeDateMonth(date: Dayjs, isNextMonth: boolean): Dayjs {
  // should decrease year
  if (date.month() === 0 && !isNextMonth) {
    return date.set("year", date.year() - 1).set("month", 11);
  }

  // should increase year
  if (date.month() === 11 && isNextMonth) {
    return date.set("year", date.year() + 1).set("month", 0);
  }

  // add or substract
  return date.add(isNextMonth ? 1 : -1, "month");
}
