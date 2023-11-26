import styled from '@emotion/native';
import {VTextProps} from 'types/components/uiElements/text';

const VText = styled.Text<VTextProps>(
  ({
    theme,
    textAlign = 'center',
    typography = 'medium15',
    color = theme.colors.textColor.primary,
    marginTopRatio = 0,
    marginLeftRatio = 0,
    fullWidth = false,
    width,
    minWidth,
  }) => ({
    color: color,
    textAlign: textAlign,
    marginTop: theme.verticalRem * marginTopRatio,
    marginLeft: theme.verticalRem * marginLeftRatio,
    textAlignVertical: 'center',
    ...(fullWidth && {width: '100%'}),
    ...theme.fonts[typography],
    ...(width && {width}),
    ...(minWidth && {minWidth}),
  }),
);

export default VText;
