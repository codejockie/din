import { Dayjs } from "dayjs";
import React from "react";
import { FC } from "react";
import "./CalendarHeader.css";

type CalendarHeaderProps = {
  date: Dayjs;
};

export const CalendarHeader: FC<CalendarHeaderProps> = ({ date }) => {
  return (
    <div className="CalendarHeader">
      <p>{date.format("MMMM").toUpperCase()}</p>
    </div>
  )
};