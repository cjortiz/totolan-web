import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./details-layout-style.css";
import "./details-layout-style-dark.css";
import { ViewMode } from "../../constants";
import { TotCard, SiriusTypography } from "../../component";
import { useStores } from "../../models";
import { color } from "../../../theme";
import { observer } from "mobx-react-lite";
export const DetailsLayout = observer((props) => {
    const { appStateStore } = useStores();
    const { viewMode, children, auditHeader, showHeader, title, removeMarginTop, } = props;
    const detailsLayoutClassName = (() => {
        switch (viewMode) {
            case ViewMode.VIEW:
                return " view";
            case ViewMode.DEFAULT:
            case ViewMode.LIST:
                return " list";
            default:
                return " default";
        }
    })();
    return (_jsxs(TotCard, { additionalClassname: `details-layout-card tot-scrollbar ${detailsLayoutClassName}${showHeader ? " pt-0" : ""}`, children: [showHeader && (_jsxs("div", { className: `details-layout-header${appStateStore.isDarkMode ? " dark" : ""}`, children: [_jsxs("div", { className: "details-layout-box-container", children: [_jsx("div", { className: `details-layout-box ${appStateStore.isDarkMode ? " dark" : ""}` }), _jsx(SiriusTypography.BodyMedium, { color: appStateStore.isDarkMode ? color.white10 : color.gray03, children: title })] }), auditHeader] })), _jsx("div", { className: `details-layout-content${removeMarginTop ? " mt-0" : ""}`, children: children })] }));
});
