import React from 'react';
import Input from './style';
import {VInputProps} from 'types/components/uiElements/input';
import {theme} from 'themes/emotion';

const VInput = (props: VInputProps) => {
  const {...rest} = props;
  return (
    <Input
      placeholderTextColor={theme.colors.textColor.placeHolder}
      {...rest}
    />
  );
};

export default VInput;
