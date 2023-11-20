import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SelectCheckDate from './index';
import {test, describe, expect, jest} from '@jest/globals';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import {SelectCheckDateProps} from 'types/components/selectCheckDate';
import {
  formatDate,
  formatDateToCheckInCheckoutFormat,
  getToday,
  getTomarrow,
} from 'utils/helpers/date';
describe('SelectCheckDate Component', () => {
  const Component = (props: SelectCheckDateProps) => (
    <ThemeProvider theme={theme}>
      <SelectCheckDate {...props} />
    </ThemeProvider>
  );

  test('renders correctly', () => {
    const {getByText} = render(<Component onConfirm={() => {}} />);
    const selectCheckDateComponent = getByText('Check In');
    expect(selectCheckDateComponent).toBeTruthy();
  });

  test('should check in button renders correct date in initial component (today)', () => {
    const {getByTestId} = render(<Component onConfirm={() => {}} />);
    const checkInDate = getByTestId('check-in-button');
    const today = getToday();
    expect(checkInDate).toHaveTextContent(
      formatDateToCheckInCheckoutFormat(today),
    );
  });

  test('should check out button renders correct date in initial component (tomarrow)', () => {
    const {getByTestId} = render(<Component onConfirm={() => {}} />);
    const checkOutDate = getByTestId('check-out-button');
    const tomarrow = getTomarrow();
    expect(checkOutDate).toHaveTextContent(
      formatDateToCheckInCheckoutFormat(tomarrow),
    );
  });

  test('calls onConfirm with the correct parameters when date is confirmed', () => {
    const onConfirmMock = jest.fn();
    const {getByText, getAllByText, getByTestId} = render(
      <Component onConfirm={onConfirmMock} />,
    );
    //press check in button to show date picker
    const checkInButton = getByTestId('check-in-button');
    fireEvent.press(checkInButton);

    //get today and tomarrow button and select a range
    const today = getToday('YYYY-MM-DD');
    const tomarrow = getTomarrow('YYYY-MM-DD');
    const todayButtons = getAllByText(formatDate(today, 'DD'));
    const tomarrowButtons = getAllByText(formatDate(tomarrow, 'DD'));
    fireEvent.press(todayButtons[0]);
    fireEvent.press(tomarrowButtons[0]);

    const confirmButton = getByText('CONFIRM');
    expect(confirmButton).toBeTruthy();
    fireEvent.press(confirmButton);

    // Ensure onConfirm is called with the expected parameters
    expect(onConfirmMock).toHaveBeenCalledWith({
      startDate: today,
      endDate: tomarrow,
    });
  });
});
