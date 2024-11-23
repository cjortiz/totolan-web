import { FileExcelOutlined } from "@ant-design/icons";
import { IconProps } from "./icon.props";
import { defaultIconColor } from "./icon.theme";

/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const ExcelIcon = (props: IconProps) => {
  const { style } = props;
  return <FileExcelOutlined style={style ? style : defaultIconColor} />;
};
