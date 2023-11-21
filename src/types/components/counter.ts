export interface VCounterProps {
  initialNumber?: number;
  onChange: (value: number) => void;
  minusRule?: boolean;
  sumRule?: boolean;
}
