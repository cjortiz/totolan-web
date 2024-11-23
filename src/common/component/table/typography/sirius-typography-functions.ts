import { FontWeight, FontWeightType } from "./sirius-typography-props";
import { color as defaultColor } from "../../../../theme";

export const fontWeightSelected = (fontWeight: string): number => {
  switch (fontWeight) {
    case FontWeight.bold:
      return 700;
    case FontWeight.semiBold:
      return 600;
    case FontWeight.medium:
      return 500;
    case FontWeight.normal:
      return 400;
    case FontWeight.light:
      return 300;
    default:
      return 400;
  }
};

export const siriusTypographyStyle = (props: {
  size: string;
  color?: any;
  fontWeight?: FontWeightType;
  letterSpacing?: number;
  isShadow?: boolean;
}): React.CSSProperties => {
  const { color, fontWeight, isShadow, letterSpacing, size } = props;

  return {
    color: color ? color : defaultColor.black1,
    fontSize: size,
    fontWeight: fontWeightSelected(fontWeight ?? ""),
    textShadow: isShadow ? "0px 4px 8px rgba(0, 0, 0, 0.15)" : "",
    letterSpacing: letterSpacing,
    transition: "color 0.8s ease",
  };
};
