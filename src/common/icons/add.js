import { jsx as _jsx } from "react/jsx-runtime";
import { PlusOutlined } from "@ant-design/icons";
import { defaultIconColor } from "./icon.theme";
/**
 * @deprecated This component is not included in the design system and will be deleted in the future.
 * Instead, consider using the {@link SiriusIcon} component. If icon not exist yet. please ask the UI/UX
 */
export const AddIcon = (props) => {
    const { style, onClick } = props;
    return (_jsx(PlusOutlined, { style: style ? style : defaultIconColor, onClick: onClick }));
};
