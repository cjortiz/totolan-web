import { jsx as _jsx } from "react/jsx-runtime";
import { Modal as AntModal } from "antd";
/***
 * @deprecated This component is deprecated and will be removed in a future release.
 * Please use the `SiriusModal` method instead.
 * This method may not be supported in future versions.
 * Migrate to the recommended method to ensure compatibility.
 */
export const Modal = (props) => {
    const { content } = props;
    return _jsx(AntModal, { ...props, children: content });
};
