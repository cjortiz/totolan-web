import "./tot-modal-style.css";
import "./tot-modal-style-dark.css";

import { Modal as AntModal } from "antd";
import { observer } from "mobx-react-lite";

import { bodyStyleModal, ModalProps } from "./tot-modal-props";
import { useStores } from "../../models";

export const TotModal = observer((props: ModalProps) => {
  const {
    open,
    title,
    footer,
    height,
    children,
    onCancel,
    className,
    maskClosable,
    fixedHeight,
    hasPaddingTop,
    closable,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  return (
    <AntModal
      closable={closable}
      open={open}
      footer={footer}
      maskClosable={maskClosable}
      className={`tot-modal ${appStateStore.isDarkMode ? "dark" : ""}`}
      style={
        fixedHeight
          ? bodyStyleModal({
              height: height ?? "",
              hasPaddingTop: hasPaddingTop,
            })
          : {}
      }
      title={title ? title : undefined}
      onCancel={onCancel}
      {...rest}
    >
      {children}
    </AntModal>
  );
});
