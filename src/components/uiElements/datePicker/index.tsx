import React, {useState} from 'react';
import Calendar from 'react-native-calendar-range-picker';
import {VDatePickerProps} from 'types/components/uiElements/datePicker';
import VRow from '../row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import Button from '../button/style';
import {DatePickerContainer, calenderStyle} from './style';
import VButton from '../button';
import VModal from '../modal';

const VDatePicker = (props: VDatePickerProps) => {
  const {
    visible,
    startDate,
    endDate,
    onClose,
    onConfirm = params => params,
    ...rest
  } = props;
  const [date, setDate] = useState({
    startDate: startDate,
    endDate: endDate,
  });
  return (
    <VModal onClose={onClose} isVisible={visible}>
      <DatePickerContainer>
        <VRow marginTopRatio={2}>
          <Button onPress={onClose} styled="TEXT">
            <CloseSvg
              width={24}
              height={24}
              fill={theme.colors.button.primary}
            />
          </Button>
        </VRow>
        <VRow fullWidth>
          <Calendar
            onChange={setDate}
            style={calenderStyle}
            disabledBeforeToday
            startDate={date.startDate}
            endDate={date.endDate}
            pastYearRange={1}
            isMonthFirst
            {...rest}
          />
        </VRow>
        <VButton
          disabled={!date.endDate}
          onPress={() => onConfirm(date)}
          title="CONFIRM"
        />
      </DatePickerContainer>
    </VModal>
  );
};

export default VDatePicker;
