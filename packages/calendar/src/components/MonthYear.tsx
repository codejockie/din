import React, { FC } from "react";
import styled from "styled-components";
import { useTranslate } from "../hooks";
import { Locale } from "../locales";

const MonthSpan = styled.span`
  color: #2d3748;
  color: rgba(45, 55, 72, var(--text-opacity));
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
`;
const YearSpan = styled.span`
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 400;
  margin-left: 0.25rem;
`;

type MonthYearProps = {
  locale: Locale;
  shownDate: Date;
};

export const MonthYear: FC<MonthYearProps> = ({ locale, shownDate }) => {
  const t = useTranslate(locale);
  const month = shownDate.getMonth();
  const year = shownDate.getFullYear();

  const renderMonthYear = () => {
    switch (locale) {
      case "ja":
      case "zh":
        return (
          <>
            <YearSpan>{`${year}${t("calendar.year.symbol")}`}</YearSpan>
            &nbsp;
            <MonthSpan>{t(`calendar.months.${month}`)}</MonthSpan>
          </>
        );

      default:
        return (
          <>
            <MonthSpan>{t(`calendar.months.${month}`)}</MonthSpan>
            &nbsp;
            <YearSpan>{`${year}${t("calendar.year.symbol")}`}</YearSpan>
          </>
        );
    }
  };

  return <div>{renderMonthYear()}</div>;
};
