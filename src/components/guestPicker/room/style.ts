import styled from '@emotion/native';
import VRow from 'components/uiElements/row';

export const Container = styled.View<{index: number}>(({theme, index}) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.stroke.divider,
  alignItems: 'flex-start',
  paddingBottom: theme.verticalRem * 6,
  marginTop: index !== 0 ? theme.verticalRem * 6 : 0,
}));

export const ChildContainer = styled.View(({theme}) => ({
  width: '97%',
  alignSelf: 'flex-end',
  borderLeftWidth: 1,
  borderLeftColor: theme.colors.stroke.divider,
  paddingLeft: theme.HorizontalRem * 3,
  marginTop: theme.verticalRem * 4,
}));
