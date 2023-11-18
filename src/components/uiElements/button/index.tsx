import React from 'react';
import Button from './style';
import {VButtonProps} from 'types/components/uiElements/button';
import VText from '../text';
import {theme} from 'themes/emotion';
import VRow from '../row';

const VButton = (props: VButtonProps) => {
  const {
    mode = 'primary',
    subTitle,
    title,
    styled = 'FULL_WIDTH',
    icon,
    onPress,
  } = props;

  const renderContentColor = () => {
    if (styled === 'TEXT') {
      return theme.colors.button[mode];
    }
    return theme.colors.textColor.button[mode];
  };

  return (
    <Button activeOpacity={0.8} onPress={onPress} styled={styled} mode={mode}>
      {icon && (
        <VRow {...(title && {marginRighRatio: 2})} fullWidth={false}>
          {icon(renderContentColor())}
        </VRow>
      )}
      <VText
        typography="semiBold16"
        color={renderContentColor()}
        marginTopRatio={0}>
        {title}
      </VText>
      {subTitle && (
        <VText
          typography="regular16"
          color={renderContentColor()}
          marginLeftRatio={1.2}
          marginTopRatio={0}>
          {subTitle}
        </VText>
      )}
    </Button>
  );
};
export default VButton;
