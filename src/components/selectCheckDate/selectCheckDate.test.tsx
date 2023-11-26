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

// Describe the test suite for SelectCheckDate Component
describe('SelectCheckDate Component', () => {
  // Define a wrapper component that includes the ThemeProvider
  const Component = (props: SelectCheckDateProps) => (
    <ThemeProvider theme={theme}>
      <SelectCheckDate {...props} />
    </ThemeProvider>
  );

  // Test: Ensure SelectCheckDate renders correctly
  test('renders correctly', () => {
    const {getByText} = render(<Component onConfirm={() => {}} />);
    const selectCheckDateComponent = getByText('Check In');
    expect(selectCheckDateComponent).toBeTruthy();
  });

  // Test: Check if the Check In button renders the correct date initially (today)
  test('should check in button renders correct date in initial component (today)', () => {
    const {getByTestId} = render(<Component onConfirm={() => {}} />);
    const checkInDate = getByTestId('check-in-button');
    const today = getToday();
    expect(checkInDate).toHaveTextContent(
      formatDateToCheckInCheckoutFormat(today),
    );
  });

  // Test: Check if the Check Out button renders the correct date initially (tomorrow)
  test('should check out button renders correct date in initial component (tomorrow)', () => {
    const {getByTestId} = render(<Component onConfirm={() => {}} />);
    const checkOutDate = getByTestId('check-out-button');
    const tomorrow = getTomarrow();
    expect(checkOutDate).toHaveTextContent(
      formatDateToCheckInCheckoutFormat(tomorrow),
    );
  });

  // Test: Ensure onConfirm is called with the correct parameters when a date range is confirmed
  test('calls onConfirm with the correct parameters when date is confirmed', () => {
    // Mock the onConfirm function
    const onConfirmMock = jest.fn();

    // Render the component with the mock function
    const {getByText, getAllByText, getByTestId} = render(
      <Component onConfirm={onConfirmMock} />,
    );

    // Press the Check In button to show the date picker
    const checkInButton = getByTestId('check-in-button');
    fireEvent.press(checkInButton);

    // Get today and tomorrow buttons and select a date range
    const today = getToday('YYYY-MM-DD');
    const tomorrow = getTomarrow('YYYY-MM-DD');
    const todayButtons = getAllByText(formatDate(today, 'DD'));
    const tomorrowButtons = getAllByText(formatDate(tomorrow, 'DD'));
    fireEvent.press(todayButtons[0]);
    fireEvent.press(tomorrowButtons[0]);

    // Press the CONFIRM button
    const confirmButton = getByText('CONFIRM');
    expect(confirmButton).toBeTruthy();
    fireEvent.press(confirmButton);

    // Ensure onConfirm is called with the expected parameters
    expect(onConfirmMock).toHaveBeenCalledWith({
      startDate: today,
      endDate: tomorrow,
    });
  });
});
