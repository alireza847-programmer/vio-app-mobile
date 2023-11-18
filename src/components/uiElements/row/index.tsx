import styled from '@emotion/native';
import {PropsWithChildren} from 'react';
import {RowProps} from 'types/components/uiElements/row';

const VRow = styled.View<PropsWithChildren<RowProps>>(
  ({
    theme,
    backgroundColor,
    fullWidth = true,
    justifyContent = 'flex-start',
    alignItems = 'center',
    marginTopRatio = 0,
    marginLeftRatio = 0,
    paddingHorizontalRatio = 0,
    paddingVerticalRatio = 0,
    marginRighRatio = 0,
    minWidth,
  }) => ({
    flexDirection: 'row',
    justifyContent,
    alignItems,
    marginTop: theme.verticalRem * marginTopRatio,
    marginLeft: theme.HorizontalRem * marginLeftRatio,
    marginRight: theme.HorizontalRem * marginRighRatio,
    paddingHorizontal: theme.HorizontalRem * paddingHorizontalRatio,
    paddingVertical: theme.verticalRem * paddingVerticalRatio,
    ...(backgroundColor && {backgroundColor}),
    ...(fullWidth && {width: '100%'}),
    ...(minWidth && {minWidth}),
  }),
);

export default VRow;
