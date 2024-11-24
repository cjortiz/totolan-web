import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExpandOutlined } from "@ant-design/icons";
import { defaultIconColor } from "./icon.theme";
/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const ExpandIcon = (props) => {
    const { style } = props;
    return (_jsxs("span", { className: "expand-icon", children: [_jsx(ExpandOutlined, { style: style ? style : defaultIconColor }), _jsx("span", { className: "expand-text", children: "Expand" })] }));
};
