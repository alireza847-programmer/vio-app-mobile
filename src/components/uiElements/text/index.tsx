import styled from '@emotion/native';
import {TextProps} from 'types/components/uiElements/text';

const VText = styled.Text<TextProps>(
  ({
    theme,
    textAlign,
    typography,
    color,
    marginTopRatio = 2,
    marginLeftRatio = 0,
    fullWidth = false,
  }) => ({
    fontFamily: theme.fonts[typography || 'medium15'].fontFamily,
    fontSize: theme.fonts[typography || 'medium15'].fontSize,
    color: color || theme.colors.textColor.primary,
    textAlign: textAlign || 'center',
    marginTop: theme.verticalRem * marginTopRatio,
    marginLeft: theme.verticalRem * marginLeftRatio,
    ...(fullWidth && {width: '100%'}),
  }),
);

export default VText;
