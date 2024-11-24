import { jsx as _jsx } from "react/jsx-runtime";
import "./card-style.css";
import "./card-style-dark.css";
import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
export const TotCard = observer((props) => {
    const { children, style, additionalClassname, id } = props;
    const { appStateStore } = useStores();
    return (_jsx(Card, { id: id, className: `tot-card ${appStateStore.isDarkMode ? "dark" : ""} ${additionalClassname ? additionalClassname : ""}`, style: style, children: children }));
});
