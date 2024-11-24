import { jsx as _jsx } from "react/jsx-runtime";
import { DeleteOutlined } from "@ant-design/icons";
import { defaultIconColor } from "./icon.theme";
/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const DeleteIcon = (props) => {
    const { style, hidden, onClick } = props;
    return (_jsx(DeleteOutlined, { hidden: hidden, style: style ? style : defaultIconColor, onClick: onClick }));
};
