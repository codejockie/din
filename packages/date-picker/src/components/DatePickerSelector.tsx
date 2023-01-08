import React from "react";
import styled from "styled-components";
import { MONTH_NAMES, changeDateMonth } from "../utils";
import { BackButton, NextButton } from "../views";

type SelectorProps = {
  fontFamily?: string;
};

const Selector = styled.div<SelectorProps>`
  font-size: 14px;
  font-family: ${(props) => props.fontFamily ?? "inherit"};
  height: 32px;
  font-weight: 400;
  display: flex;
  align-items: center;
  width: 200px;
`;

const Header = styled.span`
  flex-grow: 1;
  padding-left: 10px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 20px;
`;

const MonthSpan = styled.span`
  --text-opacity: 1;
  color: #2d3748;
  color: rgba(45, 55, 72, var(--text-opacity));
  cursor: pointer;
`;
const YearSpan = styled.span`
  --text-opacity: 1;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
  cursor: pointer;
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
        <Header>
          <MonthSpan>{MONTH_NAMES[month]}</MonthSpan>
          <YearSpan>{year}</YearSpan>
        </Header>
        <BackButton onClick={handleIconClick(false)} />
        <NextButton onClick={handleIconClick(true)} />
      </Selector>
    </>
  );
};
