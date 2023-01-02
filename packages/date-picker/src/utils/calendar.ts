import { Dayjs } from "dayjs";
import { getFirstDayWeekDay, getLastDayWeekDay } from "./date";

const TOTAL_WEEKDAYS = 6;

type CalendarCell = {
  date: Dayjs;
  day: number;
  muted?: boolean;
  isWeekend?: boolean;
};

const prepareCell = ({
  date,
  day,
  muted = false,
  isWeekend = false,
}: CalendarCell) => {
  return {
    day,
    muted,
    isWeekend,
    value: date.clone().set("date", day),
  };
};

const getCalendarDateCells = (date: Dayjs) => {
  const calendarCells = [];
  const totalDaysInMonth = date.daysInMonth();
  const lastMonth = date.subtract(1, "month");
  const nextMonth = date.add(1, "month");
  const lastMonthDaysInMonth = lastMonth.daysInMonth();
  const lastWeekday = getLastDayWeekDay(date.month(), date.year());
  const prevMonthLastWeekday = getLastDayWeekDay(
    lastMonth.month(),
    lastMonth.year()
  );
  const cellsToPrepend =
    prevMonthLastWeekday === TOTAL_WEEKDAYS ? -1 : prevMonthLastWeekday;
  const cellsToAppend = TOTAL_WEEKDAYS - lastWeekday;

  for (let i = 0; i < totalDaysInMonth; i++) {
    const day = i + 1;
    const isWeekend = day % 7 === 0 || day % 7 === 1;
    calendarCells.push(prepareCell({ date, day, isWeekend }));
  }
  for (let i = 0; i <= cellsToPrepend; i++) {
    calendarCells.unshift(
      prepareCell({
        date: lastMonth,
        day: lastMonthDaysInMonth - i,
        muted: true,
      })
    );
  }
  for (let i = 0; i < cellsToAppend; i++) {
    calendarCells.push(
      prepareCell({ date: nextMonth, day: i + 1, muted: true })
    );
  }

  return calendarCells;
};

export const getCalendarDateRows = (date: Dayjs) => {
  const rows = [];
  const cells = getCalendarDateCells(date);
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
};
