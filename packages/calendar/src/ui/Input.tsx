import styled from "styled-components";

export const Input = styled.input`
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-style: solid;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  appearance: none;
  --bg-opacity: 1;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
  --border-opacity: 1;
  border-color: rgba(237, 242, 247, var(--border-opacity));
  border-radius: 0.5rem;
  border-width: 2px;
  line-height: 1.25;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --text-opacity: 1;
  color: rgba(74, 85, 104, var(--text-opacity));
  width: 100%;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --border-opacity: 1;
    border-color: #4299e1;
    border-color: rgba(66, 153, 225, var(--border-opacity));
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
  }
`;
