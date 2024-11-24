import { jsx as _jsx } from "react/jsx-runtime";
import { ReloadOutlined } from "@ant-design/icons";
import { defaultIconColor } from "./icon.theme";
/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const ReloadIcon = (props) => {
    const { style } = props;
    return _jsx(ReloadOutlined, { style: style ? style : defaultIconColor });
};
