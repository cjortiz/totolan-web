import { CompressOutlined } from "@ant-design/icons";

import { IconProps } from "./icon.props";
import { defaultIconColor } from "./icon.theme";
import { translate } from "../i18n";

/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const CompressIcon = (props: IconProps) => {
  const { style } = props;
  return (
    <span className="expand-icon">
      <CompressOutlined style={style ? style : defaultIconColor} />
      <span className="expand-text">Compress</span>
    </span>
  );
};
