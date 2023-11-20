import React, {useState} from 'react';
import {VDropDownProps} from 'types/components/uiElements/dropDown';
import {theme} from 'themes/emotion';
import {ChevronSvg} from 'assets/svgs';
import {DropDown, containerStyle, dropDownContainerStyle} from './style';

const VDropDown = (props: VDropDownProps) => {
  const {data, placeHolder, onChange} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <DropDown
      multiple={false}
      open={open}
      onChangeValue={value => onChange(value)}
      labelStyle={theme.fonts.semiBold16}
      placeholderStyle={theme.fonts.semiBold16}
      placeholder={placeHolder}
      value={value}
      containerStyle={containerStyle}
      dropDownDirection="AUTO"
      dropDownContainerStyle={dropDownContainerStyle}
      items={data}
      setOpen={setOpen}
      setValue={setValue}
      ArrowUpIconComponent={props => (
        <ChevronSvg
          {...props}
          style={{transform: [{rotateZ: '180deg'}]}}
          fill={theme.colors.button.primary}
        />
      )}
      ArrowDownIconComponent={props => (
        <ChevronSvg {...props} fill={theme.colors.button.primary} />
      )}
    />
  );
};
export default VDropDown;
