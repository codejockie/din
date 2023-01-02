import React from "react";
import { Dayjs } from "dayjs";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { monthNames, changeDateMonth } from "../utils";
import "./DatePickerSelector.css";

type DatePickerSelectorProps = {
  date: Dayjs;
  setDate(newDate: Dayjs): void;
};

export const DatePickerSelector = ({
  date,
  setDate,
}: DatePickerSelectorProps) => {
  const year = date.year();

  const handleIconClick = (isNext: boolean) => {
    return () => {
      setDate(changeDateMonth(date, isNext));
    };
  };

  return (
    <>
      {/* Date Picker Title and Month Selector */}
      <div className={"DatePickerSelector"}>
        <div
          className={"DatePickerSelector__icon DatePickerSelector__iconLeft btn btn-outline-primary btn-sm"}
          onClick={handleIconClick(false)}>
          <ChevronDownIcon />
        </div>
        <div className={"DatePickerSelector__date btn btn-outline-primary btn-sm"}>
          {date.format("MMMM")}
        </div>
        <div className={"DatePickerSelector__date btn btn-outline-primary btn-sm"}>
          {year}
        </div>
        <div
          className={"DatePickerSelector__icon DatePickerSelector__iconRight btn btn-outline-primary btn-sm"}
          onClick={handleIconClick(true)}>
          <ChevronDownIcon />
        </div>
      </div>
    </>
  );
};
