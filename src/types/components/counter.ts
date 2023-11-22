export interface VCounterProps {
  initialNumber?: number;
  onChange: (value: number) => void;
  minusRule?: boolean;
  sumRule?: boolean;
  plusButtonTestID?: string;
  minusButtonTestID?: string;
  testID?: string;
}
