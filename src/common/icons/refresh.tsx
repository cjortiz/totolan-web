import { ReloadOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";
import { color } from "../../theme";

export const refreshButton: React.CSSProperties = { color: color.primary };

interface CheckIconInterface {
  style?: CSSProperties;
}

/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const RefreshIcon = (props: CheckIconInterface) => {
  const { style } = props;
  return <ReloadOutlined style={style ? style : refreshButton} />;
};
