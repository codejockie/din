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

export const addMonths = (date = new Date(), numOfMonths = 1) => {
  const dateClone = new Date(date.getTime());
  dateClone.setMonth(dateClone.getMonth() + numOfMonths);

  return dateClone;
};

export const subtractMonths = (date = new Date(), numOfMonths = 1) => {
  const dateCopy = new Date(date.getTime());
  dateCopy.setMonth(dateCopy.getMonth() - numOfMonths);

  return dateCopy;
};

export const getFirstDayWeekDay = (date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month, 1).getDay();
};

export const getLastDayWeekDay = (date = new Date()) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0).getDay();
};

export const getYearRanges = (from = 1900, to = 4000) => {
  const length = to + 1 - from;
  return Array.from({ length }, (_, i) => from + i);
};
