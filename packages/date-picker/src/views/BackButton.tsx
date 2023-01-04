import React, { FC } from "react";
import { Button } from "./Button";
import { ButtonWrapper } from "./ButtonWrapper";
import { Svg } from "./Svg";

type BackButtonProps = {
  className?: string;
  onClick(): void;
};

export const BackButton: FC<BackButtonProps> = ({ className, onClick }) => (
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
          d="M15 19l-7-7 7-7"></path>
      </Svg>
    </Button>
  </ButtonWrapper>
);
