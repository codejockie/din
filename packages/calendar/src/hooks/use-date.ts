import {
  getBlankDaysLimit,
  getBlankDaysStart,
  getDaysInMonth,
  Params,
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

export const useDate = ({ date, locale, firstDay }: Params): Dates => {
  const daysInMonth = getDaysInMonth(date);
  const lastMonth = subMonth(date);
  const end = getBlankDaysLimit({ date, locale, firstDay });
  const start = getBlankDaysStart({ date, locale, firstDay });
  const blankDays = [];
  const days = [];

  for (var i = 1, j = start; i <= end; i++, j++) {
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
