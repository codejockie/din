import React, { useState } from "react";
import { Calendar } from "@codejockie/calendar";
import { DatePickerSelector } from "./DatePickerSelector";
import styled from "styled-components";

const Container = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
`;

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
    <Container>
      {!calendar && (
        <DatePickerSelector
          date={shownDate}
          setDate={setShownDate}
          fontFamily={fontFamily}
        />
      )}
      <Calendar
        selectedDate={date}
        shownDate={shownDate}
        onChange={handleOnChange}
      />
    </Container>
  );
};
