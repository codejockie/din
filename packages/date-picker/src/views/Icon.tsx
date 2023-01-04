import styled from "styled-components";

export const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  --text-opacity: 1;
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--text-opacity));
  display: inline-flex;
  height: 1.5rem;
  line-height: 1;
  vertical-align: middle;
  width: 1.5rem;
`;
