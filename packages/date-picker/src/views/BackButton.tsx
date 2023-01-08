import React, { FC } from "react";
import { Button, ButtonProps } from "./Button";
import { Svg } from "./Svg";

export const BackButton: FC<ButtonProps> = ({ className, onClick }) => (
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
);
