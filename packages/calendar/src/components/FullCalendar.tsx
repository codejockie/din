import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDate, useLocale } from "../hooks";
import { CalendarEvent } from "../models";
import {
  changeMonth,
  isToday,
  LOCALISED_MONTH_NAMES,
  LOCALISED_WEEK_DAYS,
  YEAR_SYMBOLS,
} from "../utils";
import { BackButton } from "./BackButton";
import { Modal } from "./Modal";
import { NextButton } from "./NextButton";

const Container = styled.div`
  --text-opacity: 1;
  text-size-adjust: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  --bg-opacity: 1;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const CalendarWrapper = styled.div`
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

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

const DatesWrapper = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin-bottom: -0.25rem;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
`;

const Weekdays = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -40px;
`;

const WeekdayWrapper = styled.div`
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

const Weekday = styled.div`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #718096;
  color: rgba(113, 128, 150, var(--text-opacity));
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
`;

const Days = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  flex-wrap: wrap;
  display: flex;
  border-left-width: 1px;
  border-top-width: 1px;
`;

const BlankDayWrapper = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  border-right-width: 1px;
  border-bottom-width: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  width: 14.28%;
  height: 120px;
`;

const DayWrapper = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  border-right-width: 1px;
  border-bottom-width: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  position: relative;
  width: 14.28%;
  height: 120px;
`;

const Day = styled.div<{ isToday: boolean }>`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  line-height: 1;
  text-align: center;
  --text-opacity: 1;
  width: 1.5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.1s;
  background-color: ${(props) =>
    props.isToday ? "rgba(66,153,225,var(--bg-opacity))" : "transparent"};
  color: ${(props) =>
    props.isToday
      ? "rgba(255,255,255,var(--text-opacity))"
      : "rgba(74, 85, 104, var(--text-opacity))"};
`;

const Events = styled.div`
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin-top: 0.25rem;
  overflow-y: auto;
  height: 80px;
`;

const Event = styled.div<{ bg?: string }>`
  box-sizing: border-box;
  border-style: solid;
  --bg-opacity: 1;
  /* background-color: rgba(235, 248, 255, var(--bg-opacity)); */
  background-color: ${(props) =>
    props.bg ? props.bg : "rgba(235, 248, 255, var(--bg-opacity))"};
  --border-opacity: 1;
  /* border-color: rgba(190, 227, 248, var(--border-opacity)); */
  border-color: ${(props) =>
    props.bg ? props.bg : "rgba(190, 227, 248, var(--border-opacity))"};
  border-radius: 0.25rem;
  border-width: 1px;
  cursor: default;
  margin-top: 0.25rem;
  overflow: hidden;
  /* padding-top: 0.25rem;
  padding-bottom: 0.25rem; */
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  --text-opacity: 1;
  color: rgba(44, 82, 130, var(--text-opacity));
  user-select: none;
`;

const EventText = styled.p`
  --bg-opacity: 1;
  --border-opacity: 1;
  --text-opacity: 1;
  color: rgba(44, 82, 130, var(--text-opacity));
  /* mix-blend-mode: difference; */
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type FullCalendarProps = {
  date: Date;
  events: CalendarEvent[];
  locale?: "en-GB" | "en-US" | "es-ES" | "fr-FR" | "ja-JP";
  addEvent(event: CalendarEvent): void;
};

export const FullCalendar: FC<FullCalendarProps> = ({
  date,
  events,
  locale,
  addEvent,
}) => {
  const [shownDate, setShownDate] = useState(date);
  const [open, setOpen] = useState(false);
  const defaultLocale = locale ?? useLocale();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { blankDays, days } = useDate(shownDate, defaultLocale);

  const handleDayClick = (pickedDate: Date) => {
    return () => {
      setSelectedDate(pickedDate);
      setOpen(true);
    };
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedDate(null);
  };

  const handleIconClick = (isNext: boolean) => {
    return () => {
      const newDate = changeMonth(shownDate, isNext);
      setShownDate(newDate);
    };
  };

  return (
    <Container>
      <CalendarWrapper>
        <Header>
          <div>
            <BackButton onClick={handleIconClick(false)} />
            <NextButton onClick={handleIconClick(true)} />
          </div>
          <div>
            <MonthSpan>
              {LOCALISED_MONTH_NAMES[defaultLocale][shownDate.getMonth()]}
            </MonthSpan>
            <YearSpan>{shownDate.getFullYear()}{YEAR_SYMBOLS[defaultLocale]}</YearSpan>
          </div>
        </Header>
        <DatesWrapper>
          <Weekdays>
            {LOCALISED_WEEK_DAYS[defaultLocale].map((weekday, index) => (
              <WeekdayWrapper key={index}>
                <Weekday>{weekday}</Weekday>
              </WeekdayWrapper>
            ))}
          </Weekdays>
          <Days>
            {blankDays.map((_b, i) => (
              <BlankDayWrapper key={i}></BlankDayWrapper>
            ))}
            {days.map(({ day, date }, index) => (
              <DayWrapper key={index}>
                <Day isToday={isToday(date)} onClick={handleDayClick(date)}>
                  {day}
                </Day>
                <Events>
                  {events
                    .filter(
                      (e) => e.date.toDateString() === date.toDateString()
                    )
                    .map((e, i) => (
                      <Event bg={e.theme} key={i}>
                        <EventText>{e.title}</EventText>
                      </Event>
                    ))}
                </Events>
              </DayWrapper>
            ))}
          </Days>
        </DatesWrapper>
      </CalendarWrapper>
      {open && selectedDate && (
        <Modal date={selectedDate} closeModal={closeModal} onSave={addEvent} />
      )}
    </Container>
  );
};
