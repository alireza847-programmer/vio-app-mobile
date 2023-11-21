import styled from '@emotion/native';
import {TextProps} from 'types/components/uiElements/text';

const VText = styled.Text<TextProps>(
  ({
    theme,
    textAlign = 'center',
    typography = 'medium15',
    color = theme.colors.textColor.primary,
    marginTopRatio = 0,
    marginLeftRatio = 0,
    fullWidth = false,
    width,
  }) => ({
    color: color,
    textAlign: textAlign,
    marginTop: theme.verticalRem * marginTopRatio,
    marginLeft: theme.verticalRem * marginLeftRatio,
    textAlignVertical: 'center',
    ...(fullWidth && {width: '100%'}),
    ...theme.fonts[typography],
    ...(width && {width: width}),
  }),
);

export default VText;
