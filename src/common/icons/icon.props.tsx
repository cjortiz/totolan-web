import { CSSProperties } from "react";

export interface IconProps {
  style?: CSSProperties;
  onClick?: () => void;
  hidden?: boolean;
}
