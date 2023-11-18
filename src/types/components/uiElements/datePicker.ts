interface LOCALE_TYPE {
  monthNames: string[];
  dayNames: string[];
  today: string;
  year: string;
}
interface onChangeParams {
  startDate: string | null;
  endDate: string | null;
}
interface Style {
  container?: {};
  monthContainer?: {};
  weekContainer?: {};
  monthNameText?: {};
  dayNameText?: {};
  dayText?: {};
  dayTextColor?: string;
  holidayColor?: string;
  todayColor?: string;
  disabledTextColor?: string;
  selectedDayTextColor?: string;
  selectedDayBackgroundColor?: string;
  selectedBetweenDayTextColor?: string;
  selectedBetweenDayBackgroundTextColor?: string;
}
export interface VDatePickerProps {
  pastYearRange?: number;
  futureYearRange?: number;
  locale?: LOCALE_TYPE;
  startDate?: string;
  endDate?: string;
  onChange: (params: onChangeParams | any) => void;
  style?: Style;
  singleSelectMode?: boolean;
  initialNumToRender?: number;
  flatListProps?: any;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
  disabledAfterToday?: boolean;
}
