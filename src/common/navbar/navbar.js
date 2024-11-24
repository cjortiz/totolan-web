import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./navbar.css";
import TotolanIcon from "../../assets/images/totolan_icon.png";
import { AutoComplete, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../config/paths";
export const NavHeader = () => {
    const input = useRef(null);
    const navigate = useNavigate();
    const [options, setOptions] = useState([]);
    const [searchValue, setsearchValue] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [quickAccessToolTip, setQuickAccessToolTip] = useState(false);
    //   const navigate = useNavigate();
    const toggleShowSearch = () => {
        setShowSearch(!showSearch);
        input.current.focus();
    };
    const handleClear = () => {
        setsearchValue("");
    };
    //   useEffect(() => {
    //     const option = [];
    //     Object.keys(PATHS)
    //       .sort()
    //       .forEach((key, i) => {
    //         const found = resources.find((obj) => {
    //           return obj.resourceId === PATHS[key].resourceId;
    //         });
    //         if (found || PATHS[key].resourceId === RESOURCE_ENABLED) {
    //             option.push({
    //             key: PATHS[key].path,
    //             value: PATHS[key].label,
    //           });
    //         }
    //       });
    //     setOptions(option);
    //   }, [resources]);
    return (_jsxs("div", { className: "header-container", children: [_jsx("div", { style: {
                    width: "150px",
                    height: "150px",
                    marginRight: "20px",
                    display: "flex", // Optional: Aligns the content inside the div
                    justifyContent: "center", // Optional: Centers the content horizontally
                    alignItems: "center", // Optional: Centers the content vertically
                }, children: _jsx("img", { onClick: () => navigate(PATHS.DASHBOARD.path), src: TotolanIcon, alt: "Icon", style: {
                        width: "100%", // Fit to parent width
                        height: "100%", // Fit to parent height
                        borderRadius: "50%", // Maintain the border radius
                        objectFit: "cover", // Cover the div while maintaining aspect ratio
                    } }) }), _jsxs("div", { style: {
                    width: "30%",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                }, children: [_jsx("div", { style: {
                            width: "100%",
                            height: "50%",
                            display: "flex",
                            alignItems: "end",
                        }, children: _jsx(Typography.Text, { style: { fontSize: "30px", fontWeight: "bold", color: "#00008b" }, children: "TOTOLAN ELEMENTARY SCHOOL" }) }), _jsx("div", { style: { width: "100%", height: "50%" }, children: _jsx(Typography.Text, { style: { fontSize: "20px", fontWeight: 500 }, children: "LEARNING MANAGEMENT SYSTEM" }) })] }), _jsx("div", { style: {
                    marginLeft: "29%",
                    width: "30%",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                }, children: _jsx(AutoComplete, { ref: input, autoFocus: true, style: { height: "50px", width: "50%", borderRadius: 20 }, options: options, filterOption: (inputValue, option) => option?.value?.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                        -1, value: searchValue, onSelect: (e) => {
                        if (e) {
                            const path = options.find((value) => value.value === e);
                            //   navigate(path.key);
                            setShowSearch(false);
                            setsearchValue("");
                        }
                    }, onChange: (e) => {
                        setsearchValue(e);
                    }, children: _jsx(Input, { style: { height: "50px", width: "100%", borderRadius: 20 }, prefix: _jsx(SearchOutlined, {}), placeholder: "Search" }) }) })] }));
};
