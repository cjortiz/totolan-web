import { jsx as _jsx } from "react/jsx-runtime";
import "./layout.css";
export const MainLayout = (props) => {
    const { children, isFlex } = props;
    return (_jsx("div", { className: `main-layout-container ${isFlex ? "flex" : ""} `, children: children }));
};
