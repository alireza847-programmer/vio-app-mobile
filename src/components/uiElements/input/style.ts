import styled from '@emotion/native';

const Input = styled.TextInput(({theme}) => ({
  borderWidth: 1,
  width: '100%',
  padding: theme.HorizontalRem * 4,
  borderRadius: theme.radius * 2,
  borderColor: theme.colors.stroke.input,
  fontFamily: theme.fonts.medium15.fontFamily,
  fontSize: theme.fonts.medium15.fontSize,
}));

export default Input;
