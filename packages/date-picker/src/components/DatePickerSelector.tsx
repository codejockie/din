import React from "react";
import styled from "styled-components";
import { MONTH_NAMES, changeDateMonth } from "../utils";
import { BackButton, NextButton } from "../views";

type SelectorProps = {
  fontFamily?: string;
};

const Selector = styled.div<SelectorProps>`
  align-items: center;
  display: flex;
  font-family: ${(props) => props.fontFamily ?? "inherit"};
  justify-content: space-between;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
`;

const MonthSpan = styled.span`
  --text-opacity: 1;
  color: #2d3748;
  color: rgba(45, 55, 72, var(--text-opacity));
  cursor: pointer;
  font-size: 1.125rem;
`;
const YearSpan = styled.span`
  --text-opacity: 1;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 400;
  margin-left: 0.25rem;
`;

type DatePickerSelectorProps = {
  date: Date;
  setDate(newDate: Date): void;
} & SelectorProps;

export const DatePickerSelector = ({
  date,
  fontFamily,
  setDate,
}: DatePickerSelectorProps) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const handleIconClick = (isNext: boolean) => {
    return () => {
      const newDate = changeDateMonth(date, isNext);
      setDate(newDate);
    };
  };

  return (
    <>
      {/* Date Picker Title and Month Selector */}
      <Selector fontFamily={fontFamily}>
        <BackButton onClick={handleIconClick(false)} />
        <div>
          <MonthSpan>{MONTH_NAMES[month]}</MonthSpan>
          <YearSpan>{year}</YearSpan>
        </div>
        <NextButton onClick={handleIconClick(true)} />
      </Selector>
    </>
  );
};
