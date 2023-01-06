import React, { FC } from "react";
import { IconButton, IconButtonProps } from "./IconButton";
import { Svg } from "./Svg";

export const BackButton: FC<IconButtonProps> = ({ className, onClick }) => (
  <IconButton onClick={onClick}>
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
  </IconButton>
);
