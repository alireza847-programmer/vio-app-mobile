# VDatePicker Component Documentation

The `VDatePicker` component is a React Native date picker that allows users to select a date range using the `react-native-calendar-range-picker`. This component is designed to be versatile and provides options for customization.

## Usage

```jsx
import React, {useEffect, useState} from 'react';
import {LayoutAnimation, TouchableOpacity, View} from 'react-native';
import Calendar from 'react-native-calendar-range-picker';
import {VDatePickerProps} from 'types/components/uiElements/datePicker';
import VRow from '../row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import Button from '../button/style';
import {DatePickerContainer, calenderStyle} from './style';
import VButton from '../button';

const YourComponent = () => {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleConfirm = date => {
    // Handle the confirmed date range
    console.log('Selected Date Range:', date);
    // Additional logic or state management can be added here
    setVisible(false); // Close the date picker
  };

  const handleClose = () => {
    // Handle closing the date picker
    setVisible(false);
  };

  return (
    <VDatePicker
      startDate={startDate}
      endDate={endDate}
      visible={visible}
      onConfirm={handleConfirm}
      onClose={handleClose}
    />
  );
};

export default YourComponent;
```

## Props

### `startDate` (string)

The start date for the date range.

### `endDate` (string)

The end date for the date range.

### `visible` (boolean)

Determines whether the date picker is visible or not.

### `onConfirm` (function)

A callback function that will be triggered when the user confirms the selected date range. It receives an object with `startDate` and `endDate` properties.

### `onClose` (function)

A callback function that will be triggered when the user closes the date picker.

### `style` (object)

An object containing styling options for the date picker. Refer to the `Style` interface in the component for available styling options.

### `pastYearRange` (number)

The number of past years to display in the date picker.

### `futureYearRange` (number)

The number of future years to display in the date picker.

### `locale` (object)

An object defining the localization of month names, day names, today, and year. Refer to the `LOCALE_TYPE` interface in the component for details.

### `singleSelectMode` (boolean)

Determines whether the date picker is in single-select mode. Default is `false`.

### `initialNumToRender` (number)

The initial number of items to render in the date picker.

### `flatListProps` (object)

Additional props for the underlying `FlatList` component.

### `isMonthFirst` (boolean)

Determines whether the month is displayed first. Default is `false`.

### `disabledBeforeToday` (boolean)

Disables dates before today. Default is `false`.

### `disabledAfterToday` (boolean)

Disables dates after today. Default is `false`.

## Styling

The `VDatePicker` component provides styling options through the `style` prop. You can customize the appearance of various elements by providing a style object with specific keys. Refer to the `Style` interface in the component for available styling options.

## Example

```jsx
<VDatePicker
  startDate="2023-06-01"
  endDate="2023-06-10"
  visible={true}
  onConfirm={dates => console.log('Selected Dates:', dates)}
  onClose={() => console.log('Date Picker Closed')}
  style={{
    container: {
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
    },
    monthNameText: {
      color: theme.colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    dayText: {
      color: theme.colors.textColor.primary,
    },
    // Add more styling options as needed
  }}
/>
```

## Important Note

Make sure to handle the state of `startDate`, `endDate`, and `visible` in your parent component to properly control the behavior of the date picker.
