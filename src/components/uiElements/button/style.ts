import styled from '@emotion/native';
import {ButtonProps} from 'types/components/uiElements/button';

const Button = styled.TouchableOpacity<ButtonProps>(
  ({theme, mode = 'primary', styled = 'FULL_WIDTH'}) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius * 2,
    borderColor: theme.colors.stroke.button,
    ...(styled === 'FULL_WIDTH' && {width: '100%'}),
    ...(styled === 'CONTENT_SIZE' && {
      paddingHorizontal: theme.HorizontalRem * 4,
    }),
    ...(styled !== 'TEXT' && {
      paddingVertical: theme.verticalRem * 4,
    }),
    ...(styled !== 'TEXT' && {backgroundColor: theme.colors.button[mode]}),
    ...(mode === 'secondary' && styled !== 'TEXT' && {borderWidth: 1}),
  }),
);

export default Button;
