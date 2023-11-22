# VDropDown Component Documentation

## Overview

The `VDropDown` component is a versatile dropdown selector designed for React Native applications. It provides an intuitive way to present a list of options to the user and capture their selection.

## Usage

```jsx
import React from 'react';
import VDropDown from './path-to-your-component/VDropDown'; // Adjust the import path based on your project structure

const MyComponent = () => {
  const data = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedValue, setSelectedValue] = React.useState(''); // Track the selected value in your component's state

  const handleChange = value => {
    setSelectedValue(value);
    // Handle any additional logic here
  };

  return (
    <VDropDown
      data={data}
      placeHolder="Select an option"
      onChange={handleChange}
      defaultValue={selectedValue} // Set this to preselect a value
    />
  );
};
```

## Props

### VDropDown Props

- `data` (Array): An array of strings representing the options available in the dropdown.
- `placeHolder` (string): The placeholder text to display when no option is selected.
- `onChange` (function): A callback function triggered when the user selects an option. It receives the selected value as an argument.
- `defaultValue` (string): The default value to preselect in the dropdown.

## Example

```jsx
import React, {useState} from 'react';
import {View} from 'react-native';
import VDropDown from './path-to-your-component/VDropDown'; // Adjust the import path based on your project structure

const ExampleScreen = () => {
  const data = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = value => {
    setSelectedValue(value);
  };

  return (
    <View>
      <VDropDown
        data={data}
        placeHolder="Select an option"
        onChange={handleChange}
        defaultValue={selectedValue}
      />
    </View>
  );
};

export default ExampleScreen;
```

## Style

The styling for the `VDropDown` component is managed internally and follows a clean and consistent design to ensure compatibility with various themes and styles.

## Modal

The component uses an internal modal to display the options. It renders a `WheelPicker` for easy selection and provides a confirm button to finalize the choice. The modal is automatically displayed when the user taps the dropdown.
