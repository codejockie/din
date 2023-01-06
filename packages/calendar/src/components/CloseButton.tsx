import React, { FC } from "react";
import styled from "styled-components";
import { Svg } from "../ui";

const Div = styled.div`
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  --bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --text-opacity: 1;
  color: rgba(160, 174, 192, var(--text-opacity));
  width: 2.5rem;

  &:hover {
    --text-opacity: 1;
    color: #2d3748;
    color: rgba(45, 55, 72, var(--text-opacity));
  }
`;

type CloseButtonProps = {
  onClick(): void;
};

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <Div onClick={onClick}>
      <Svg fill="currentColor" height="1.5rem" width="1.5rem">
        <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path>
      </Svg>
    </Div>
  );
};
