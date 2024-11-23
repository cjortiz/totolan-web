import { TotModal } from "../../component";
import { MainLayout } from "../main-layout";

import { ModalLayoutProps } from "./modal-layout-props";

export const ModalLayout = (props: ModalLayoutProps) => {
  const {
    height,
    buttons,
    children,
    closable,
    openModal,
    modalTitle,
    closeModal,
    screenTitle,
    fixedHeight,
    hasPaddingTop,
  } = props;

  return (
    <TotModal
      width={"96%"}
      footer={null}
      height={height}
      centered={true}
      open={openModal}
      title={modalTitle}
      closable={closable}
      maskClosable={false}
      destroyOnClose={true}
      fixedHeight={fixedHeight}
      onCancel={closeModal}
      hasPaddingTop={hasPaddingTop}
    >
      <MainLayout title={screenTitle} buttons={buttons}>
        {children}
      </MainLayout>
    </TotModal>
  );
};
