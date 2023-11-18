import React, {useEffect} from 'react';
import {LayoutAnimation, TouchableOpacity, View} from 'react-native';
import Calendar from 'react-native-calendar-range-picker';
import {VDatePickerProps} from 'types/components/uiElements/datePicker';
import VRow from '../row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import Button from '../button/style';
import {DatePickerContainer, calenderStyle} from './style';
import VButton from '../button';

const VDatePicker = (props: VDatePickerProps) => {
  const {visible, onClose, ...rest} = props;
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [visible]);
  return (
    <DatePickerContainer style={{height: visible ? '100%' : 0}}>
      {visible && (
        <VRow marginTopRatio={2}>
          <Button onPress={onClose} styled="TEXT">
            <CloseSvg
              width={24}
              height={24}
              fill={theme.colors.button.primary}
            />
          </Button>
        </VRow>
      )}
      <VRow fullWidth>
        <Calendar
          style={calenderStyle}
          disabledBeforeToday
          pastYearRange={1}
          isMonthFirst
          {...rest}
        />
      </VRow>
      {visible && (
        <VRow fullWidth>
          <VButton onPress={() => {}} title="CONFIRM" />
        </VRow>
      )}
    </DatePickerContainer>
  );
};

export default VDatePicker;
