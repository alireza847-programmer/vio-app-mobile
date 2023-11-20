import styled, {css} from '@emotion/native';

export const modalStyle = css({
  justifyContent: 'flex-end',
  margin: 0,
  padding: 0,
});

export const Wrapper = styled.View(({theme}) => ({
  backgroundColor: theme.colors.backgroundColor,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: theme.HorizontalRem * 4,
}));
