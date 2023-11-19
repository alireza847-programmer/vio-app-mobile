import styled from '@emotion/native';
import {Dropdown as EDropDown} from 'react-native-element-dropdown';

export const DropDown = styled(EDropDown)<{isFocous: boolean}>(
  ({theme, isFocous}) => ({
    borderColor: isFocous
      ? theme.colors.button.primary
      : theme.colors.stroke.input,
    borderWidth: 1,
    borderRadius: theme.radius * 2,
    paddingHorizontal: theme.HorizontalRem * 4,
    paddingVertical: theme.verticalRem * 2,
  }),
);
