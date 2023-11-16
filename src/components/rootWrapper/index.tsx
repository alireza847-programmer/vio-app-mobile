import styled from '@emotion/native';

const RootWrapper = styled.View(({theme}) => ({
  backgroundColor: theme.colors.backgroundColor,
  paddingHorizontal: theme.HorizontalRem * 4,
  flex: 1,
}));

export default RootWrapper;
