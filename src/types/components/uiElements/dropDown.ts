import {ItemType} from 'react-native-dropdown-picker';

export interface VDropDownProps {
  data: Array<string>;
  placeHolder?: string;
  onChange: (value: string) => void;
  title: string;
  defaultValue?: number;
  testID?: number;
}
