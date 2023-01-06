import styled from "styled-components";

export const Button = styled.button`
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  border-style: solid;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  overflow: visible;
  text-transform: none;
  background-image: none;
  cursor: pointer;
  line-height: inherit;
  appearance: button;
  --bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  --border-opacity: 1;
  border-color: rgba(226, 232, 240, var(--border-opacity));
  border-radius: 0.5rem;
  border-width: 1px;
  font-weight: 600;
  margin-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --text-opacity: 1;
  color: rgba(74, 85, 104, var(--text-opacity));

  &:hover {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--bg-opacity));
  }
`;

export const DarkButton = styled(Button)`
  /* --bg-opacity: 1; */
  background-color: #2d3748;
  background-color: rgba(45, 55, 72, var(--bg-opacity));
  /* --border-opacity: 1; */
  border-color: #4a5568;
  border-color: rgba(74, 85, 104, var(--border-opacity));
  /* --text-opacity: 1; */
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));

  &:hover {
    --bg-opacity: 1;
    background-color: #4a5568;
    background-color: rgba(74, 85, 104, var(--bg-opacity));
  }
`;
