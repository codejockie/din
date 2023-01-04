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

function getFirstDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function changeDateMonth(date: Date, isNextMonth: boolean): Date {
  let dateClone = new Date(date.getTime());
  dateClone = getFirstDayOfMonth(date);
  const month = dateClone.getMonth();
  const year = dateClone.getFullYear();
  // Decrease year
  if (month === 0 && !isNextMonth) {
    dateClone.setFullYear(year - 1);
    dateClone.setMonth(11);
    return dateClone;
  }

  // Increase year
  if (month === 11 && isNextMonth) {
    dateClone.setFullYear(year + 1);
    dateClone.setMonth(0);
    return dateClone;
  }

  // Add or substract
  dateClone.setMonth(month + (isNextMonth ? 1 : -1));
  return dateClone;
}
