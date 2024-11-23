import React from "react";

export interface ModalProps {
  open: boolean;
  title?: React.ReactNode;
  onOk?: () => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  className?: string;
  centered?: boolean;
  width?: string | number;
  height?: string;
  fixedHeight?: boolean;
  closable?: boolean;
  mask?: boolean;
  hasPaddingTop?: boolean;
  afterClose?: any;
}
export const bodyStyleModal = (props: {
  height: string;
  hasPaddingTop?: boolean;
}): React.CSSProperties => {
  const { height, hasPaddingTop } = props;
  return {
    height: height ? height : "calc(105vh - 200px)",
    overflowY: "auto",
    paddingTop: hasPaddingTop ? "50px" : "",
  };
};
