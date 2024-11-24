import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from "antd";
import { color as defaultColor } from "../../../theme";
export const TotBadge = (props) => {
    const { color, children, ...rest } = props;
    return (_jsx(Badge, { ...rest, color: color ? color : defaultColor.primary02, children: children }));
};
