import { ExpandOutlined } from "@ant-design/icons";
import { translate } from "i18n";

import { IconProps } from "./icon.props";
import { defaultIconColor } from "./icon.theme";

/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const ExpandIcon = (props: IconProps) => {
  const { style } = props;
  return (
    <span className="expand-icon">
      <ExpandOutlined style={style ? style : defaultIconColor} />
      <span className="expand-text">{translate("dashboard.expand")}</span>
    </span>
  );
};
