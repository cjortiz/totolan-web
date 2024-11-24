import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./main-layout-style.css";
import { SiriusTypography } from "../../component";
import { Space } from "antd";
import { color } from "../../../theme";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
export const MainLayout = observer((props) => {
    const { children, buttons, title } = props;
    const { appStateStore } = useStores();
    return (_jsxs("div", { className: "main-layout-container", children: [_jsxs("div", { className: "main-layout-header", children: [_jsx(SiriusTypography.BodyLarge, { fontWeight: "semibold", color: appStateStore.isDarkMode ? color.white10 : color.primary02, children: title }), buttons && _jsx(Space, { children: buttons })] }), _jsx("div", { className: "main-layout-content", children: children })] }));
});
