export interface VTextProps {
  typography?:
    | 'bold21'
    | 'medium15'
    | 'semiBold16'
    | 'semiBold18'
    | 'regular16';
  color?: string;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  marginTopRatio?: number;
  marginLeftRatio?: number;
  fullWidth?: boolean;
  width?: number;
  minWidth?: number;
}
