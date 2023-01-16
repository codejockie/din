import React, { FC } from "react";
import styled from "styled-components";
import { FirstDayOfWeek } from "../enums";
import { useTranslate } from "../hooks";
import { Locale } from "../locales";

const DaysOfWeekContainer = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -40px;
`;

const DayOfWeekWrapper = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 14.26%;
`;

const DayOfWeek = styled.div`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
`;

const array = Array.from({ length: 7 });

type DaysOfWeekProps = {
  locale: Locale;
  weekStartsOn?: FirstDayOfWeek;
};

const getTranslationKey = (weekStartsOn?: FirstDayOfWeek) => {
  const prefixKey = "calendar.daysOfWeek";
  switch (weekStartsOn) {
    case "mon":
      return `${prefixKey}.startsOn.mon.medium`;
    // case "sat":
    //   return `${prefixKey}.startsOn.sat`;
    case "sun":
      return `${prefixKey}.startsOn.sun.medium`;

    default:
      return `${prefixKey}.medium`;
  }
};

export const DaysOfWeek: FC<DaysOfWeekProps> = ({ locale, weekStartsOn }) => {
  const t = useTranslate(locale);
  const tKey = getTranslationKey(weekStartsOn);

  return (
    <DaysOfWeekContainer>
      {array.map((_, i) => (
        <DayOfWeekWrapper key={i}>
          <DayOfWeek>{t(`${tKey}.${i}`)}</DayOfWeek>
        </DayOfWeekWrapper>
      ))}
    </DaysOfWeekContainer>
  );
};
