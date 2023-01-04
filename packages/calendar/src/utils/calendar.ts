import {
  addMonths,
  getDaysInMonth,
  getLastDayWeekDay,
  subtractMonths,
} from "./date";

const TOTAL_WEEKDAYS = 6;

type CalendarCell = {
  date: Date;
  day: number;
  disabled?: boolean;
  muted?: boolean;
  isWeekend?: boolean;
};

type Cell = {
  day: number;
  muted: boolean;
  isWeekend: boolean;
  disabled: boolean;
  value: Date;
};

const prepareCell = ({
  date,
  day,
  disabled = false,
  muted = false,
  isWeekend = false,
}: CalendarCell): Cell => {
  const dateClone = new Date(date.getTime());
  dateClone.setDate(day);

  return {
    day,
    muted,
    disabled,
    isWeekend,
    value: dateClone,
  };
};

const getCalendarDateCells = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const calendarCells = [];
  const totalDaysInMonth = getDaysInMonth(date);
  const lastMonth = subtractMonths(date);
  const nextMonth = addMonths(date);
  const lastMonthDaysInMonth = getDaysInMonth(lastMonth);
  const lastWeekday = getLastDayWeekDay(date);
  const prevMonthLastWeekday = getLastDayWeekDay(lastMonth);
  const cellsToPrepend =
    prevMonthLastWeekday === TOTAL_WEEKDAYS ? -1 : prevMonthLastWeekday;
  const cellsToAppend = TOTAL_WEEKDAYS - lastWeekday;

  for (let i = 0; i < totalDaysInMonth; i++) {
    const day = i + 1;
    const isWeekend = new Date(year, month, day).getDay() % 6 === 0;
    calendarCells.push(prepareCell({ date, day, isWeekend }));
  }
  for (let i = 0; i <= cellsToPrepend; i++) {
    calendarCells.unshift(
      prepareCell({
        date: lastMonth,
        day: lastMonthDaysInMonth - i,
        muted: true,
        disabled: true,
      })
    );
  }
  for (let i = 0; i < cellsToAppend; i++) {
    calendarCells.push(
      prepareCell({ date: nextMonth, day: i + 1, muted: true, disabled: true })
    );
  }

  return calendarCells;
};

export const getCalendarDateRows = (date: Date) => {
  const rows = [];
  const cells = getCalendarDateCells(date);
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
};
