import styled from '@emotion/native';
import VRow from '../row';

export const Container = styled(VRow)(({theme}) => ({
  borderWidth: 1,
  borderColor: theme.colors.stroke.input,
  paddingLeft: theme.HorizontalRem * 4,
  paddingRight: theme.HorizontalRem * 2,
  paddingVertical: theme.verticalRem * 2,
  borderRadius: theme.radius * 2,
}));
