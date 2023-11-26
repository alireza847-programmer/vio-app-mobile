export interface VModalProps {
  isVisible: boolean;
  onClose: () => void;
  withHeader?: boolean;
  withClose?: boolean;
  title?: string;
}
