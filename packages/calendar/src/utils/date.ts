export const WEEK_DAYS = ["sun", "mon", "tue", "wed", "thu", "Fri", "sat"];
/*
  In most countries of the world, Monday is the first day of the week. In many Muslim countries, the first day of the week is Saturday.
  In North and South America, as well as in China, Japan, the Philippines, South Korea, Israel, Kenya, Hong Kong and South Africa, the first day of the week is Sunday.
 */
export const LOCALISED_WEEK_DAYS_LONG = {
  // prettier-ignore
  "en-GB": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  // prettier-ignore
  "en-US": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  // prettier-ignore
  "es-ES": ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
  // prettier-ignore
  "fr-FR": [ "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
  // prettier-ignore
  "ja-JP": [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
};
// prettier-ignore
export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const LOCALISED_MONTH_NAMES = {
  // prettier-ignore
  "en-GB": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  // prettier-ignore
  "en-US": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  // prettier-ignore
  "es-ES": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  // prettier-ignore
  "fr-FR": ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  // prettier-ignore
  "it-IT": ["Jennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
  // prettier-ignore
  "ja-JP": ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"],
};

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
};

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
