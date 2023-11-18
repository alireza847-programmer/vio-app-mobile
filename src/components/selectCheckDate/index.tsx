import React, {Fragment, useState} from 'react';
import {
  DatePickerOnChangeData,
  DatePickerStateData,
  SelectCheckDateProps,
} from 'types/components/selectCheckDate';
import {CheckInRow, Container, DatePickerContainer} from './style';
import VText from 'components/uiElements/text';
import Button from 'components/uiElements/button';
import VRow from 'components/uiElements/row';
import {ChevronSvg} from 'assets/svgs';
import VDatePicker from 'components/uiElements/datePicker';
import {
  formatDateToCheckInCheckoutFormat,
  getToday,
  getTomarrow,
} from 'utils/helpers/date';
import dayjs from 'dayjs';

const SelectCheckDate = (props: SelectCheckDateProps) => {
  const {onSelect} = props;
  const [datePickerData, setDatePickerData] = useState<DatePickerStateData>({
    visible: false,
    data: {
      startDate: getToday(),
      endDate: getTomarrow(),
    },
  });
  const onDatePickerConfirm = (params: DatePickerOnChangeData) => {
    setDatePickerData(prevState => ({
      visible: false,
      data: params,
    }));
  };
  return (
    <Fragment>
      <Container>
        <CheckInRow
          justifyContent="space-between"
          paddingHorizontalRatio={4}
          paddingVerticalRatio={4}>
          <VText marginTopRatio={0}>Check In</VText>
          <Button
            rightIcon={fill => <ChevronSvg fill={fill} />}
            onPress={() =>
              setDatePickerData(data => ({...data, visible: true}))
            }
            title={formatDateToCheckInCheckoutFormat(
              datePickerData.data.startDate,
            )}
            styled="TEXT"
          />
        </CheckInRow>
        <VRow
          justifyContent="space-between"
          paddingHorizontalRatio={4}
          paddingVerticalRatio={4}>
          <VText marginTopRatio={0}>Check Out</VText>
          <Button
            rightIcon={fill => <ChevronSvg fill={fill} />}
            onPress={() =>
              setDatePickerData(data => ({...data, visible: true}))
            }
            styled="TEXT"
            title={formatDateToCheckInCheckoutFormat(
              datePickerData.data.endDate,
            )}
          />
        </VRow>
      </Container>
      <VDatePicker
        onClose={() => setDatePickerData(data => ({...data, visible: false}))}
        visible={datePickerData.visible}
        onConfirm={onDatePickerConfirm}
        startDate={datePickerData.data.startDate}
        endDate={datePickerData.data.endDate}
      />
    </Fragment>
  );
};
export default SelectCheckDate;
