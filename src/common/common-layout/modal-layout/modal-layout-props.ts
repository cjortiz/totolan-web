export interface ModalLayoutProps {
  openModal: boolean;
  modalTitle?: string;
  screenTitle: string;
  children: React.ReactNode;
  buttons?: React.ReactNode[];
  closeModal: () => void;
  fixedHeight?: boolean;
  closable?: boolean;
  height?: string;
  hasPaddingTop?: boolean;
}
