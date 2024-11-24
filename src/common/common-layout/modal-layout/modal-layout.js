import { jsx as _jsx } from "react/jsx-runtime";
import { TotModal } from "../../component";
import { MainLayout } from "../main-layout";
export const ModalLayout = (props) => {
    const { height, buttons, children, closable, openModal, modalTitle, closeModal, screenTitle, fixedHeight, hasPaddingTop, } = props;
    return (_jsx(TotModal, { width: "96%", footer: null, height: height, centered: true, open: openModal, title: modalTitle, closable: closable, maskClosable: false, destroyOnClose: true, fixedHeight: fixedHeight, onCancel: closeModal, hasPaddingTop: hasPaddingTop, children: _jsx(MainLayout, { title: screenTitle, buttons: buttons, children: children }) }));
};
