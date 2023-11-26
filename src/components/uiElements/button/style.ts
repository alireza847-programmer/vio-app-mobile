import styled from '@emotion/native';
import {ButtonProps} from 'types/components/uiElements/button';

const Button = styled.TouchableOpacity<ButtonProps>(
  ({theme, mode = 'primary', width, styled = 'FULL_WIDTH', disabled}) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius * 2,
    borderColor: disabled
      ? theme.colors.stroke.disabledButton
      : theme.colors.stroke.button,
    ...(styled === 'FULL_WIDTH' && {width: '100%'}),
    ...(styled === 'FULL_WIDTH' && {
      paddingVertical: theme.verticalRem * 4,
    }),
    ...(styled === 'CONTENT_SIZE' && {
      paddingHorizontal: theme.HorizontalRem * 2,
    }),
    ...(styled === 'CONTENT_SIZE' && {
      paddingVertical: theme.verticalRem * 2,
    }),
    ...(styled !== 'TEXT' && {backgroundColor: theme.colors.button[mode]}),
    ...(styled !== 'TEXT' &&
      disabled && {backgroundColor: theme.colors.button.disabled}),
    ...(mode === 'secondary' && styled !== 'TEXT' && {borderWidth: 1}),
    ...(width && {width: width}),
  }),
);

export default Button;
