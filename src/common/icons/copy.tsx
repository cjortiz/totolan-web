import { CopyTwoTone } from "@ant-design/icons";
import React from "react";

import { IconProps } from "./icon.props";
import { defaultIconColor } from "./icon.theme";

/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const CopyIcon = (props: IconProps) => {
  const { style, onClick } = props;
  return (
    <span className="expand-icon">
      <CopyTwoTone style={style ? style : defaultIconColor} onClick={onClick} />
    </span>
  );
};
