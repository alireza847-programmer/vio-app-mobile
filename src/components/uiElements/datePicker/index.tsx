import {theme} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Calendar from 'react-native-calendar-range-picker';
import {VDatePickerProps} from 'types/components/uiElements/datePicker';

const VDatePicker = (props: VDatePickerProps) => {
  const {...rest} = props;
  return (
    <View style={{width: '100%'}}>
      <Calendar disabledBeforeToday pastYearRange={0} {...rest} />
    </View>
  );
};

export default VDatePicker;
