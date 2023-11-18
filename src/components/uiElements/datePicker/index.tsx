import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Calendar from 'react-native-calendar-range-picker';
import {VDatePickerProps} from 'types/components/uiElements/datePicker';
import VRow from '../row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import Button from '../button/style';
import {DatePickerContainer} from './style';

const VDatePicker = (props: VDatePickerProps) => {
  const {visible, onClose, ...rest} = props;
  if (visible) {
    return (
      <DatePickerContainer>
        <VRow marginTopRatio={2} justifyContent="flex-end">
          <Button onPress={onClose} styled="TEXT">
            <CloseSvg
              width={32}
              height={32}
              fill={theme.colors.button.primary}
            />
          </Button>
        </VRow>
        <Calendar
          disabledBeforeToday
          pastYearRange={1}
          isMonthFirst
          {...rest}
        />
      </DatePickerContainer>
    );
  }
};

export default VDatePicker;
