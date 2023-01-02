import React, { useMemo } from "react";
import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import { getCalendarDateRows, fullWeekDays } from "../utils";
import "./DatePickerCalendar.css";

type DatePickerCalendarProps = {
  selectedDate: Dayjs;
  shownDate: Dayjs;
  onChange?(newDate: Dayjs): void;
};

export const DatePickerCalendar = ({
  selectedDate,
  shownDate,
  onChange,
}: DatePickerCalendarProps) => {
  const dateRows = useMemo(() => getCalendarDateRows(shownDate), [shownDate]);

  return (
    <>
      {/* Days of the week */}
      <div className={"DatePickerCalendar__header"}>
        {fullWeekDays.map((day, index) => {
          const isWeekend = index === 0 || index === 6;
          return (
            <div
              key={`${day}_${index}`}
              className={clsx("DatePickerCalendar__cell", {
                DatePickerCalendar__cell_secondary: isWeekend,
              })}>
              {day}
            </div>
          );
        })}
      </div>
      {/* Days of the month */}
      {dateRows.map((cells, index) => (
        <div key={index} className={"DatePickerCalendar__row"}>
          {cells.map(({ day, value, muted, isWeekend }, i) => {
            const isToday = selectedDate === dayjs();
            const selected = value.toString() === selectedDate.toString();
            return (
              <div
                key={`${day}_${i}`}
                className={clsx(
                  "DatePickerCalendar__cell",
                  "DatePickerCalendar__dayCell",
                  {
                    DatePickerCalendar__dayCell_selected: selected,
                    DatePickerCalendar__dayCell_today: isToday,
                    DatePickerCalendar__dayCell_active: !muted,
                    DatePickerCalendar__dayCell_muted: muted,
                    DatePickerCalendar__cell_secondary: isWeekend,
                  }
                )}>
                {day}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};
