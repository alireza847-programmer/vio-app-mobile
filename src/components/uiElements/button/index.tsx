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
    rightIcon,
    onPress,
    testID,
    disabled = false,
    width,
  } = props;

  const renderContentColor = () => {
    if (disabled) {
      return theme.colors.textColor.button.disabled;
    }
    if (styled === 'TEXT') {
      return theme.colors.button[mode];
    }
    return theme.colors.textColor.button[mode];
  };

  return (
    <Button
      width={width}
      disabled={disabled}
      testID={testID}
      activeOpacity={0.8}
      onPress={onPress}
      styled={styled}
      mode={mode}>
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
      {rightIcon && (
        <VRow {...(title && {marginLeftRatio: 2})} fullWidth={false}>
          {rightIcon(renderContentColor())}
        </VRow>
      )}
    </Button>
  );
};
export default VButton;
