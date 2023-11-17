export interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'error';
  styled?: 'TEXT' | 'FULL_WIDTH' | 'CONTENT_SIZE';
}

export interface VButtonProps extends ButtonProps {
  title?: string;
  icon?: (fill: string) => JSX.Element;
  subTitle?: string;
  onPress: () => void;
}
