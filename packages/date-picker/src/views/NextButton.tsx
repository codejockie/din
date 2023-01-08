import React, { FC } from "react";
import { Button, ButtonProps } from "./Button";
import { Svg } from "./Svg";

export const NextButton: FC<ButtonProps> = ({ className, onClick }) => (
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
);
