import { PlusSquareOutlined } from "@ant-design/icons";
import { IconProps } from "./icon.props";
import { defaultIconColor } from "./icon.theme";

/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const PlusSquareOutlinedIcon = (props: IconProps) => {
  const { style } = props;
  return <PlusSquareOutlined style={style ? style : defaultIconColor} />;
};
