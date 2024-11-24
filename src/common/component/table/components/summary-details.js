import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Col, Modal } from "antd";
import { useState } from "react";
import { useStores } from "../../../models";
import "./summary-details.css";
import { summaryBtnStyle, summaryIconStyle, summaryModalStyle, summaryTitleStyle, summaryValueStyle, } from "../styles";
import { translate } from "../../../i18n";
export const SummaryDetails = (props) => {
    const { title, value, content, hideModal } = props;
    const { appStateStore } = useStores();
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (_jsx(_Fragment, { children: !hideModal ? (_jsxs("div", { children: [_jsx("button", { style: summaryBtnStyle, onClick: () => {
                        setIsOpenModal(true);
                    }, children: _jsxs("h3", { style: summaryTitleStyle, children: [title, _jsx("span", { style: summaryValueStyle, children: value }), _jsx("span", { style: summaryIconStyle, children: _jsx(DoubleRightOutlined, {}) })] }) }), _jsx(Modal, { className: `summary-modal${appStateStore.isDarkMode ? " dark" : ""}`, centered: true, width: "25%", footer: null, open: isOpenModal, bodyStyle: summaryModalStyle, title: translate("common.summary"), onCancel: () => setIsOpenModal(false), children: _jsx(Col, { span: 24, children: content }) })] })) : (_jsx("div", { children: _jsxs("h3", { children: [title, _jsx("span", { style: summaryValueStyle, children: value })] }) })) }));
};
