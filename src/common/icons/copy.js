import { jsx as _jsx } from "react/jsx-runtime";
import { CopyTwoTone } from "@ant-design/icons";
import { defaultIconColor } from "./icon.theme";
/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const CopyIcon = (props) => {
    const { style, onClick } = props;
    return (_jsx("span", { className: "expand-icon", children: _jsx(CopyTwoTone, { style: style ? style : defaultIconColor, onClick: onClick }) }));
};
