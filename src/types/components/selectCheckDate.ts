export interface SelectCheckDateProps {
  onSelect: (params: DatePickerOnChangeData) => void;
}

export interface DatePickerOnChangeData {
  startDate: string;
  endDate: string;
}

export interface DatePickerStateData {
  visible: boolean;
  data: DatePickerOnChangeData;
}
