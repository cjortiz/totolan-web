export interface ModalProps {
  open: boolean;
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  content: React.ReactNode;
  footer?: any[] | null;
  closable?: boolean;
  bodyStyle?: React.CSSProperties;
  centered?: boolean;
  width?: string;
}

