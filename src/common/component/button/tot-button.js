import { jsx as _jsx } from "react/jsx-runtime";
import "./tot-button-style.css";
import "./tot-button-style-dark.css";
import { Button } from "antd";
import { getClassName, } from "./tot-button.props";
import { color } from "../../../theme";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { DEFAULT_ICON_SIZE } from "../../constants";
import { TotIcons } from "../../icons/tot-icon";
import { CloseOutlined } from "@ant-design/icons";
const SiriusButton = (props) => {
    const { className, text, tx, children, type, padding, size, width, tabIndex, additionalClassname, ...buttonProps } = props;
    const paddingOverride = padding ? { padding: padding } : {};
    const i18nText = tx && translate(tx);
    const content = i18nText || text || children;
    const { appStateStore } = useStores();
    return (_jsx(Button, { tabIndex: tabIndex && tabIndex, type: type === "link" ? "link" : undefined, className: `${className ? className : getClassName(type)}${additionalClassname ? ` ${additionalClassname}` : ""} ${appStateStore.isDarkMode ? "dark" : ""}`, size: size ? size : "middle", style: { width: width ? width : "100%", ...paddingOverride }, ...buttonProps, children: content }));
};
SiriusButton.Primary = (props) => {
    return _jsx(SiriusButton, { ...props });
};
SiriusButton.Secondary = (props) => {
    return _jsx(SiriusButton, { type: "secondary", ...props });
};
SiriusButton.Tertiary = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return _jsx(SiriusButton, { icon: icon && icon, type: "tertiary", ...rest });
};
SiriusButton.Link = (props) => {
    return _jsx(SiriusButton, { type: "link", ...props });
};
SiriusButton.IconPrimary = (props) => {
    return _jsx(SiriusButton, { type: "add", className: "tot-icon-primary", ...props });
};
SiriusButton.IconSecondary = (props) => {
    return _jsx(SiriusButton, { type: "add", className: "tot-icon-secondary", ...props });
};
SiriusButton.Save = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx(SiriusButton.IconPrimary, { icon: _jsx(TotIcons.Save, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.white }), padding: "1.25rem", ...rest, children: "Save" }));
};
SiriusButton.Add = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconPrimary, { icon: _jsx(TotIcons.Add, { width: iconWidth ? iconWidth : undefined, height: iconHeight ? iconWidth : undefined, color: color.white }), ...rest }) }));
};
SiriusButton.BACK = (props) => {
    const { icon, iconHeight, children, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Back, { width: iconWidth ? iconWidth : undefined, height: iconHeight ? iconWidth : undefined, color: color.white }), ...rest, children: children }) }));
};
SiriusButton.Refresh = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Refresh, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.secondary02 }), ...rest }) }));
};
SiriusButton.Menu = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Menu, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.secondary02 }), ...rest }));
};
SiriusButton.Edit = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Edit, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.secondary02 }), ...rest }) }));
};
SiriusButton.Delete = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Delete, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.secondary02 }), ...rest }) }));
};
SiriusButton.Close = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconSecondary, { icon: _jsx(CloseOutlined, {}), ...rest }) }));
};
SiriusButton.Options = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Options, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.secondary02 }), ...rest }));
};
SiriusButton.Batchselect = (props) => {
    const { icon, iconHeight, iconWidth, ...rest } = props;
    return (_jsx("div", { children: _jsx(SiriusButton.IconSecondary, { icon: _jsx(TotIcons.Batchselect, { width: iconWidth ? iconWidth : DEFAULT_ICON_SIZE, height: iconHeight ? iconWidth : DEFAULT_ICON_SIZE, color: color.secondary02 }), ...rest }) }));
};
export default SiriusButton;
