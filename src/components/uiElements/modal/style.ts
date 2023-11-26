import styled, {css} from '@emotion/native';
import VRow from '../row';

export const modalStyle = css({
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  marginBottom: 10,
});

export const Wrapper = styled.View(({theme}) => ({
  backgroundColor: theme.colors.backgroundColor,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.radius * 2,
  width: '95%',
}));

export const HeaderContainer = styled(VRow)(({theme}) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.stroke.divider,
}));
