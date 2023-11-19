import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {VDropDownProps} from 'types/components/uiElements/dropDown';
import {DropDown} from './style';
import {theme} from 'themes/emotion';

const VDropDown = (props: VDropDownProps) => {
  const {data} = props;
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  console.log(data);
  return (
    <View style={styles.container}>
      <DropDown
        placeholderStyle={theme.fonts.semiBold16}
        labelField="label"
        valueField={'value'}
        data={data}
        isFocous={isFocus}
        placeholder={'Age'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          //   setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};
export default VDropDown;

const styles = StyleSheet.create({
  container: {
    minWidth: '40%',
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
