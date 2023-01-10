import {
  getDaysInMonth,
  getFirstDayOfWeekInMonth,
  getLastDayOfWeekInMonth,
  subMonth,
} from "../utils";

type Day = {
  day: number;
  date: Date;
};

type Dates = {
  blankDays: Day[];
  days: Day[];
};

export const useDate = (date: Date): Dates => {
  const daysInMonth = getDaysInMonth(date);
  const dayOfWeek = getFirstDayOfWeekInMonth(date);
  const lastMonth = subMonth(date);
  const daysInPrevMonth = getDaysInMonth(lastMonth);
  const prevMonthLastDayOfWeek = getLastDayOfWeekInMonth(lastMonth);
  const startDay = daysInPrevMonth - prevMonthLastDayOfWeek;
  const blankDays = [];
  const days = [];

  for (var i = 1, j = startDay; i <= dayOfWeek; i++, j++) {
    blankDays.push({
      day: j,
      date: new Date(lastMonth.getFullYear(), lastMonth.getMonth(), j),
    });
  }

  for (var i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      date: new Date(date.getFullYear(), date.getMonth(), i),
    });
  }

  return { days, blankDays };
};
