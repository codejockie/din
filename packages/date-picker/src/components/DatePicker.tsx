import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePickerCalendar } from "./DatePickerCalendar";
import { DatePickerSelector } from "./DatePickerSelector";
import "./DatePicker.css";
import { CalendarHeader } from "./CalendarHeader";

type CommonProps = {
  selectedDate?: Date;
};

type TruncateProps =
  | {
      calendar?: false;
      onChange(newDate: Dayjs): void;
    }
  | {
      calendar: true;
      onChange?: never;
    };
type DatePickerProps = CommonProps & TruncateProps;

export const DatePicker: React.FC<DatePickerProps> = ({
  calendar = false,
  selectedDate,
  onChange,
}) => {
  const [date] = useState(dayjs(selectedDate));
  const [shownDate, setShownDate] = useState(dayjs(selectedDate));

  return (
    <div className={"DatePicker"}>
      {!calendar && (
        <DatePickerSelector date={shownDate} setDate={setShownDate} />
      )}
      {calendar && <CalendarHeader date={date} />}
      <DatePickerCalendar
        selectedDate={date}
        shownDate={shownDate}
        onChange={onChange}
      />
    </div>
  );
};
