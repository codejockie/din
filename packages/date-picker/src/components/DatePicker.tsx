import React, { useState } from "react";
import { Calendar } from "@codejockie/calendar";
import { DatePickerSelector } from "./DatePickerSelector";
import "./DatePicker.css";

type CommonProps = {
  selectedDate?: Date;
  fontFamily?: string;
};

type TruncateProps =
  | {
      calendar?: false;
      onChange(newDate: Date): void;
    }
  | {
      calendar: true;
      onChange?: never;
    };
type DatePickerProps = CommonProps & TruncateProps;

export const DatePicker: React.FC<DatePickerProps> = ({
  calendar = false,
  selectedDate = new Date(),
  fontFamily,
  onChange,
}) => {
  const [date, setSelectedDate] = useState(selectedDate);
  const [shownDate, setShownDate] = useState(date);
  
  const handleOnChange = (newDate: Date) => {
    setShownDate(newDate);
    setSelectedDate(newDate);
    onChange?.(newDate);
  };

  return (
    <div className={"DatePicker"}>
      {!calendar && (
        <DatePickerSelector date={shownDate} setDate={setShownDate} fontFamily={fontFamily} />
      )}
      <Calendar
        selectedDate={date}
        shownDate={shownDate}
        onChange={handleOnChange}
      />
    </div>
  );
};
