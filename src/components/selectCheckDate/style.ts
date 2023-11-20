import styled, {css} from '@emotion/native';
import VRow from 'components/uiElements/row';

export const Container = styled.View(({theme}) => ({
  borderWidth: 1,
  borderColor: theme.colors.stroke.input,
  width: '100%',
  borderRadius: theme.radius * 2,
}));

export const CheckInRow = styled(VRow)(({theme}) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.stroke.input,
}));

export const DatePickerContainer = styled.View(({theme}) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
}));
