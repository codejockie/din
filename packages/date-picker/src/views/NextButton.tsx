import React, { FC } from "react";
import { Button } from "./Button";
import { ButtonWrapper } from "./ButtonWrapper";
import { Svg } from "./Svg";

type NextButtonProps = {
  className?: string;
  onClick(): void;
};

export const NextButton: FC<NextButtonProps> = ({ className, onClick }) => (
  <ButtonWrapper>
    <Button onClick={onClick}>
      <Svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={className}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"></path>
      </Svg>
    </Button>
  </ButtonWrapper>
);
