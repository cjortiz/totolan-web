import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout, Menu, theme } from "antd";
import "./App.css";
import { AppRoutes } from "./routes";
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { NavHeader } from "./common/navbar";
import { useNavigate } from "react-router-dom";
import { PATHS } from "./config/paths";
import { RootStoreProvider, setupRootStore } from "./common";
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem("Option 1", "1", _jsx(PieChartOutlined, {})),
    getItem("Option 2", "2", _jsx(DesktopOutlined, {})),
    getItem("Student Setup", "sub1", _jsx(UserOutlined, {}), [
        getItem("Section", "3"),
        getItem("Grades", "4"),
    ]),
    getItem("Teacher Setup", "sub2", _jsx(TeamOutlined, {}), [
        getItem("Edit Grades", "5"),
        getItem("Section Assignment", "6"),
    ]),
    getItem("Files", "7", _jsx(FileOutlined, {})),
];
function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [rootStore, setRootStore] = useState(undefined);
    // Kick off initial async loading actions, like loading fonts and RootStore
    useEffect(() => {
        (async () => {
            setupRootStore().then(setRootStore);
        })();
    }, []);
    const navigate = useNavigate();
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    const handleMenuClick = (key) => {
        switch (key) {
            case "1":
                navigate("/path1"); // Replace with the actual path
                break;
            case "2":
                navigate("/path2"); // Replace with the actual path
                break;
            case "3":
                // navigate(PATHS.GRADES.path); // Replace with the actual path
                break;
            case "4":
                navigate(PATHS.Students.path);
                break;
            default:
                break;
        }
    };
    if (!rootStore)
        return _jsx("div", { children: "Loading..." });
    return (_jsx(RootStoreProvider, { value: rootStore, children: _jsx(Layout, { style: { minHeight: "100vh", width: "100%" }, children: _jsxs(Layout, { children: [_jsxs(Sider, { onMouseEnter: () => setCollapsed(false), onMouseLeave: () => setCollapsed(true), collapsed: collapsed, children: [_jsxs("div", { style: { padding: "16px", textAlign: "center", color: "#fff" }, children: [_jsx("img", { src: "https://via.placeholder.com/40" // Replace with your profile picture URL
                                        , alt: "Profile", style: { borderRadius: "50%", width: "40px", height: "40px" } }), _jsx("div", { style: { marginTop: "8px", fontSize: "16px" }, children: "User Name" })] }), " ", _jsx(Menu, { theme: "dark", defaultSelectedKeys: ["1"], mode: "inline", items: items, onClick: ({ key }) => handleMenuClick(key) })] }), _jsxs(Layout, { children: [_jsx(NavHeader, {}), _jsx(Content, { style: { margin: "0 16px" }, children: _jsx("div", { style: {
                                        height: "76vh",
                                        background: colorBgContainer,
                                        borderRadius: borderRadiusLG,
                                    }, children: _jsx(AppRoutes, {}) }) }), _jsxs(Footer, { style: { textAlign: "center" }, children: ["Totalan Learning Management \u00A9", new Date().getFullYear(), " Created by BISU"] })] })] }) }) }));
}
export default App;
