import styled from "styled-components";

export const Button = styled.button`
  appearance: button;
  align-items: center;
  border-radius: 0.5rem;
  background-image: none;
  background-color: transparent;
  border-width: 0;
  color: inherit;
  cursor: pointer;
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
    --bg-opacity: 1;
    background-color: #edf2f7;
    background-color: rgba(237, 242, 247, var(--bg-opacity));
  }
`;
