# VButton Component Documentation

## Overview

The `VButton` component is a versatile button element designed for React Native applications. It provides flexibility in styling and configuration to suit different design needs.

## Usage

```jsx
import React from 'react';
import VButton, {VButtonProps} from './path-to-your-component/VButton'; // Adjust the import path based on your project structure

const MyComponent = () => {
  const handlePress = () => {
    // Handle button press logic here
  };

  const buttonProps: VButtonProps = {
    mode: 'primary', // Options: 'primary', 'secondary', 'error'
    styled: 'FULL_WIDTH', // Options: 'TEXT', 'FULL_WIDTH', 'CONTENT_SIZE'
    title: 'Click me',
    subTitle: 'Optional subtitle',
    onPress: handlePress,
    // Add other props as needed
  };

  return <VButton {...buttonProps} />;
};
```

## Props

### VButton Props

- `mode` (string): The mode of the button. Options include 'primary', 'secondary', and 'error'.
- `styled` (string): The style of the button. Options include 'TEXT', 'FULL_WIDTH', and 'CONTENT_SIZE'.
- `width` (DimensionValue): The width of the button. Use this to set a custom width for the button.

### Extended VButton Props

- `title` (string): The main text content of the button.
- `icon` (function): A function that returns a React element to be used as the button icon.
- `rightIcon` (function): A function that returns a React element to be used as the icon on the right side of the button.
- `subTitle` (string): Optional subtitle text to display next to the main title.
- `onPress` (function): A callback function triggered when the button is pressed.
- `testID` (string): Test identifier for testing purposes.
- `disabled` (boolean): If true, the button is in a disabled state.

## Example

```jsx
import React from 'react';
import VButton, {VButtonProps} from './path-to-your-component/VButton'; // Adjust the import path based on your project structure

const ExampleScreen = () => {
  const handlePress = () => {
    // Handle button press logic here
  };

  const buttonProps: VButtonProps = {
    mode: 'primary',
    title: 'Click me',
    subTitle: 'Optional subtitle',
    styled: 'FULL_WIDTH',
    onPress: handlePress,
  };

  return <VButton {...buttonProps} />;
};

export default ExampleScreen;
```

## Icons

The `icon` and `rightIcon` props allow you to add custom icons to the left and right sides of the button, enhancing its visual appeal. Pass functions that return React elements for customization.
