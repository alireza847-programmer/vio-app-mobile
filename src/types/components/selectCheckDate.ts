export interface SelectCheckDateProps {
  onConfirm: (params: DatePickerOnChangeData) => void;
}

export interface DatePickerOnChangeData {
  startDate: string;
  endDate: string;
}

export interface DatePickerStateData {
  visible: boolean;
  data: DatePickerOnChangeData;
}
