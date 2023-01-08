import React from "react";
import styled from "styled-components";
import { FC } from "react";
import { MONTH_NAMES } from "../utils";

type WrapperProps = {
  colour?: string;
  fontFamily?: string;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana";
};

type CalendarHeaderProps = {
  date: Date;
  className?: string;
  showHeader?: boolean;
  showYear?: boolean;
} & WrapperProps;

const Wrapper = styled.div<WrapperProps>`
  color: ${(props) => props.colour ?? "#ff0000"};
  font-size: 12px;
  font-family: ${(props) => props.fontFamily ?? '"Nova Mono", monospace'};
  padding: 0 5px;
  user-select: none;

  & p {
    margin: 0;
    text-transform: ${(props) => props.textTransform};
  }
`;

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  date,
  className,
  colour = "red",
  showHeader = false,
  showYear = false,
  textTransform = "uppercase",
}) => {
  return showHeader ? (
    <Wrapper className={className} color={colour} textTransform={textTransform}>
      <p>
        {MONTH_NAMES[date.getMonth()]}
        {showYear && ` ${date.getFullYear()}`}
      </p>
    </Wrapper>
  ) : null;
};
