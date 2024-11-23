export type FontWeightType =
  | "bold"
  | "semibold"
  | "medium"
  | "normal"
  | "light";

export interface SiriusTypographyProps {
  copyable?: any;
  color?: any;
  darkColor?: string;
  children: React.ReactNode;
  fontWeight?: FontWeightType;
  letterSpacing?: number;
  isShadow?: boolean;
  isHovered?: boolean;
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export enum FontSize {
  Heading1 = "2.375rem", // 38px
  Heading2 = "1.875rem", // 30px
  Heading3 = "1.5625rem", // 25px
  BodyLarge = "1.125rem", //18px
  BodyMedium = "1rem", // 16px
  ButtonDefault = "0.9375rem", //15px
  BodySmall = "0.875rem", // 14px
  BodyExtraSmall = "0.75rem", // 12px
  Caption = "0.625rem", // 10px
}

export enum FontWeight {
  bold = "bold", // 700
  semiBold = "semibold", // 600
  medium = "medium", // 500
  normal = "normal", // 400
  light = "light", // 300
}
