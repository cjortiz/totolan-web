import { Modal as AntModal } from "antd";

export interface ModalProps {
  open: boolean;
  title: string;
  onOk?: () => void;
  onCancel?: () => void;
  content: React.ReactNode;
  footer?: any[] | null;
  closable?: boolean;
}

/***
 * @deprecated This component is deprecated and will be removed in a future release.
 * Please use the `SiriusModal` method instead.
 * This method may not be supported in future versions.
 * Migrate to the recommended method to ensure compatibility.
 */
export const Modal = (props: ModalProps) => {
  const { content } = props;
  return <AntModal {...props}>{content}</AntModal>;
};
