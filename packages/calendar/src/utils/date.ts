export const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTH_NAMES = [
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

export const getDaysInMonth = (date: Date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  // month is zero index based
  // 0 is the last day of previous month
  return new Date(year, month, 0).getDate();
};

export const addMonth = (date = new Date(), numOfMonths = 1) => {
  const dateClone = new Date(date.getTime());
  dateClone.setMonth(dateClone.getMonth() + numOfMonths);

  return dateClone;
};

export const subMonth = (date = new Date(), numOfMonths = 1) => {
  const dateCopy = new Date(date.getTime());
  dateCopy.setMonth(dateCopy.getMonth() - numOfMonths);

  return dateCopy;
};

export const getFirstDayOfWeekInMonth = (date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month, 1).getDay();
};

export const getLastDayOfWeekInMonth = (date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0).getDay();
};

export const getYearRanges = (from = 1900, to = 4000) => {
  const length = to + 1 - from;
  return Array.from({ length }, (_, i) => from + i);
};

export const isToday = (date: Date) => {
  return date.toDateString() === new Date().toDateString();
};

const getFirstDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function changeMonth(date: Date, isNextMonth: boolean): Date {
  let dateClone = new Date(date.getTime());
  dateClone = getFirstDay(date);
  const month = dateClone.getMonth();
  const year = dateClone.getFullYear();
  const isPastYear = month === 0 && !isNextMonth;
  const isNextYear = month === 11 && isNextMonth;

  if (isPastYear || isNextYear) {
    const monthsToAdd = isPastYear ? 11 : 0;
    const yearsToAdd = year + (isPastYear ? -1 : 1);
    dateClone.setMonth(monthsToAdd);
    dateClone.setFullYear(yearsToAdd);
    return dateClone;
  }

  // Add or subtract month
  dateClone.setMonth(month + (isNextMonth ? 1 : -1));
  return dateClone;
}
