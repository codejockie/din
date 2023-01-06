import styled from "styled-components";

export type IconButtonProps = {
  className?: string;
  onClick(): void;
};

export const IconButton = styled.button`
  appearance: button;
  align-items: center;
  border-radius: 0.5rem;
  background-image: none;
  background-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
  color: inherit;
  cursor: pointer;
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--text-opacity));
  display: inline-flex;
  font-size: 100%;
  font-family: inherit;
  line-height: inherit;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding: 0.25rem;
  text-transform: none;

  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.1s;

  &:hover {
    background-color: #edf2f7;
    background-color: rgba(237, 242, 247, var(--bg-opacity));
  }
`;
