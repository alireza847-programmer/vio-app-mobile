import styled, {css} from '@emotion/native';
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker';
import {theme} from 'themes/emotion';

export const DropDown = styled(DropDownPicker)<
  DropDownPickerProps<string | number | boolean>
>(({theme}) => ({
  borderColor: theme.colors.stroke.input,
  borderWidth: 1,
  borderRadius: theme.radius * 2,
  paddingHorizontal: theme.HorizontalRem * 4,
  paddingVertical: theme.verticalRem * 2,
}));

export const containerStyle = css`
  width: 40%;
`;

export const dropDownContainerStyle = css`
  border: 1px;
  border-color: ${theme.colors.stroke.input};
`;
