import styled from '@emotion/native';
import {FlatList, Platform} from 'react-native';
import {hp} from 'utils/dimensions';
import {ParsedLinkItem} from 'utils/helpers/deepLink';

export const FlatListContainer = styled.FlatList(({theme}) => ({
  maxHeight: hp(75),
}));

export const ButtonsWrapper = styled.View(({theme}) => ({
  marginTop: theme.verticalRem * 6,
  position: 'absolute',
  bottom: theme.verticalRem * 4,
  right: 0,
  width: '100%',
}));

export const Container = styled.View(({theme}) => ({
  height: Platform.OS === 'android' ? hp(85) : hp(88),
}));
