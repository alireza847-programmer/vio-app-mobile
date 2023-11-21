import React, {Fragment, useEffect, useState} from 'react';
import {VDropDownProps} from 'types/components/uiElements/dropDown';
import {theme} from 'themes/emotion';
import {ChevronSvg} from 'assets/svgs';
import {Container} from './style';
import WheelPicker from 'react-native-wheely';
import VModal from '../modal';
import VText from '../text';
import VRow from '../row';
import VButton from '../button';
import {TouchableOpacity} from 'react-native';

const VDropDown = (props: VDropDownProps) => {
  const {data, placeHolder, onChange, defaultValue} = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const [value, setValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (defaultValue) {
      setValue(String(defaultValue));
      setSelectedIndex(data.indexOf(String(defaultValue)));
    } else {
      setValue(String(placeHolder));
    }
  }, [placeHolder, defaultValue]);
  const onConfirm = () => {
    setVisibleModal(false);
    setValue(data[selectedIndex]);
    onChange(data[selectedIndex]);
  };
  const renderModal = () => {
    return (
      <VModal
        withClose
        withHeader
        title="Child 1 age"
        onClose={() => setVisibleModal(false)}
        isVisible={visibleModal}>
        <WheelPicker
          selectedIndex={selectedIndex}
          options={data}
          onChange={index => setSelectedIndex(index)}
          containerStyle={{width: '90%'}}
          opacityFunction={x => 0.3}
          selectedIndicatorStyle={{
            backgroundColor: theme.colors.button.secondary,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: theme.colors.button.primary,
          }}
          visibleRest={1}
          itemStyle={{
            backgroundColor: 'transparent',
          }}
          itemTextStyle={{
            ...theme.fonts.semiBold18,
          }}
        />
        <VRow paddingVerticalRatio={4} justifyContent="center">
          <VButton onPress={onConfirm} width={'90%'} title="CONFIRM" />
        </VRow>
      </VModal>
    );
  };
  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setVisibleModal(true)}>
        <Container
          alignItems="center"
          justifyContent="space-between"
          fullWidth={false}>
          <VText
            width={theme.HorizontalRem * 10}
            textAlign="left"
            typography="semiBold16">
            {value}
          </VText>
          <VRow fullWidth={false} marginLeftRatio={3}>
            <ChevronSvg fill={theme.colors.button.primary} />
          </VRow>
        </Container>
      </TouchableOpacity>
      {renderModal()}
    </Fragment>
  );
};
export default VDropDown;
