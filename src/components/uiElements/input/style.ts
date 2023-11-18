import styled from '@emotion/native';
import {InputProps} from 'types/components/uiElements/input';

const Input = styled.TextInput<InputProps>(({theme, marginTopRatio = 1}) => ({
  borderWidth: 1,
  width: '100%',
  padding: theme.HorizontalRem * 4,
  borderRadius: theme.radius * 2,
  borderColor: theme.colors.stroke.input,
  fontFamily: theme.fonts.medium15.fontFamily,
  fontSize: theme.fonts.medium15.fontSize,
  marginTop: theme.verticalRem * marginTopRatio,
}));

export default Input;
