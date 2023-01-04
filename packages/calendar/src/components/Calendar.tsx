import React, { useMemo } from "react";
import styled from "styled-components";
import { getCalendarDateRows, WEEK_DAYS } from "../utils";
import { CalendarHeader } from "./CalendarHeader";

type WeekdaysProps = {};
type CellProps = {
  fontFamily?: string;
  isWeekend: boolean;
};
type DateCellProps = {
  isMuted?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  selectedBg?: string;
  isDisabled?: boolean;
  selectedColour?: string;
};

type CalendarProps = {
  selectedDate: Date;
  shownDate: Date;
  showHeader?: boolean;
  showYear?: boolean;
  cellProps?: {
    fontFamily?: string;
    selectedBg?: string;
    selectedColour?: string;
  };
  headerProps?: {
    colour?: string;
    fontFamily?: string;
  };
  onChange?(newDate: Date): void;
};

const Weekdays = styled.div<WeekdaysProps>`
  margin: 0 5px;
  margin-bottom: 8px;
  display: flex;
  user-select: none;
`;

const DatesRow = styled.div`
  display: flex;
  margin: 0 5px;
`;

const Cell = styled.div<CellProps>`
  padding: 4px;
  width: 32px;
  height: 32px;
  margin: 0 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.isWeekend ? "#6c757d" : props.color)};
  font-family: ${(props) => props.fontFamily ?? '"Nova Mono", monospace'};
`;

const DateCell = styled(Cell)<DateCellProps>`
  cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  box-shadow: ${({ isMuted }) =>
    !isMuted ? "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)" : "none"};
  background-color: ${(props) => {
    if (props.isSelected) {
      return props.selectedBg ?? "#ff0000";
    }
  }};
  color: ${(props) => {
    if (props.isSelected) {
      return props.selectedColour ?? "#fff";
    }
    if (props.isToday) {
      return "#ff0000";
    }
    if (props.isMuted) {
      return "#f0f0f0";
    }
  }};
  user-select: ${(props) => (props.isDisabled ? "none" : "auto")};

  &:active {
    background-color: "#d1d1d1";
  }
  &:hover {
    background-color: ${({ isDisabled, isSelected }) =>
      !isSelected && !isDisabled ? "#e9e9e9" : ""};
  }
`;

export const Calendar = ({
  selectedDate,
  shownDate,
  showHeader,
  showYear,
  cellProps = {},
  headerProps = {},
  onChange,
}: CalendarProps) => {
  const dateRows = useMemo(() => getCalendarDateRows(shownDate), [shownDate]);

  const handleCellClick = (date: Date, disabled: boolean) => {
    return () => {
      !disabled && onChange?.(date);
    };
  };

  return (
    <>
      {/* Month and/or Year title */}
      <CalendarHeader
        date={shownDate}
        showHeader={showHeader}
        showYear={showYear}
        {...headerProps}
      />
      {/* Days of the week */}
      <Weekdays>
        {WEEK_DAYS.map((day, index) => {
          const isWeekend = index === 0 || index === 6;
          return (
            <Cell key={`${day}_${index}`} isWeekend={isWeekend}>
              {day}
            </Cell>
          );
        })}
      </Weekdays>
      {/* Days of the month */}
      {dateRows.map((cells, index) => (
        <DatesRow key={index}>
          {cells.map(({ day, disabled, value, muted, isWeekend }, i) => {
            const isToday = value.toDateString() === new Date().toDateString();
            const selected =
              value.toDateString() === selectedDate.toDateString() && !muted;
            return (
              <DateCell
                isMuted={muted}
                isToday={isToday}
                isSelected={selected}
                isWeekend={isWeekend}
                isDisabled={disabled}
                key={`${day}_${i}`}
                {...cellProps}
                onClick={handleCellClick(value, disabled)}>
                {day}
              </DateCell>
            );
          })}
        </DatesRow>
      ))}
    </>
  );
};
