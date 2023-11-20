import {ItemType} from 'react-native-dropdown-picker';

export interface VDropDownProps {
  data: Array<ItemType<number | string | boolean>>;
  placeHolder?: string;
  onChange: (value: string | number | boolean | null) => void;
}
