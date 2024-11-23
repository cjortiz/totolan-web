import { TxKeyPath } from "../../i18n";

type SizeTypes = "large" | "middle" | "small";
type ButtonTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "link"
  | "add"
  | "refresh"
  | "menu"
  | "edit"
  | "delete"
  | "close"
  | "options"
  | "batchselect"
  | "back";

export interface SiriusButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  text?: string;
  tx?: TxKeyPath;
  size?: SizeTypes;
  width?: string;
  iconHeight?: number;
  iconWidth?: number;
  padding?: string;
  hidden?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  tabIndex?: number;
}
export interface SiriusButtonCommonProps extends SiriusButtonProps {
  type?: ButtonTypes;
  additionalClassname?: string;
}

export const getClassName = (type: ButtonTypes | undefined): string => {
  if (type) {
    switch (type) {
      case "secondary":
        return "sirius-button-secondary";
      case "tertiary":
        return "sirius-button-tertiary";
      case "link":
        return "sirius-button-link";
      case "add":
        return "sirius-icon-primary";
      case "refresh":
      case "menu":
      case "edit":
      case "delete":
      case "close":
      case "options":
      case "batchselect":
        return "sirius-icon-secondary";
      default:
        return "sirius-button-primary";
    }
  }
};
