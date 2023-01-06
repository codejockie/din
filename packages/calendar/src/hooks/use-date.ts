import { getDaysInMonth, getFirstDayWeekDay } from "../utils";

type Dates = {
  blankDays: number[];
  days: { day: number; date: Date }[];
};

export const useDate = (date: Date): Dates => {
  const daysInMonth = getDaysInMonth(date);
  const dayOfWeek = getFirstDayWeekDay(date);
  const blankDays = [];
  const days = [];

  for (var i = 1; i <= dayOfWeek; i++) {
    blankDays.push(i);
  }

  for (var i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      date: new Date(date.getFullYear(), date.getMonth(), i),
    });
  }

  return { days, blankDays };
};
