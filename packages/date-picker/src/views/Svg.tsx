import styled from "styled-components";
import { Icon } from "./Icon";

type SvgProps = {
  height?: number;
  width?: number;
};

export const Svg = styled(Icon)<SvgProps>`
  height: ${(props) => (props.height ? `${props.height}px` : "24px")};
  width: ${(props) => (props.width ? `${props.width}px` : "24px")};
`;
