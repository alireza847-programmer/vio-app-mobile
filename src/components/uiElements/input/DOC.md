# VInput Component

## Overview

The `VInput` component is a customizable input field designed for use in React Native applications. It provides a clean and consistent interface for capturing user input.

## Style

The styling for the `VInput` component is defined in the `Input` module. It uses Emotion's styling system for enhanced readability and maintainability.

```jsx
import styled from '@emotion/native';
import {InputProps} from 'types/components/uiElements/input';

const VInput =
  styled.TextInput <
  InputProps >
  (({theme, marginTopRatio = 1}) => ({
    borderWidth: 1,
    width: '100%',
    padding: theme.HorizontalRem * 4,
    borderRadius: theme.radius * 2,
    borderColor: theme.colors.stroke.input,
    fontFamily: theme.fonts.medium15.fontFamily,
    fontSize: theme.fonts.medium15.fontSize,
    marginTop: theme.verticalRem * marginTopRatio,
  }));

export default VInput;
```

## Usage

```jsx
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import VInput from './path-to-your-component/VInput';

const ExampleScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <View>
      <Text>Enter your text:</Text>
      <VInput
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Type here..."
        marginTopRatio={2}
      />
    </View>
  );
};

export default ExampleScreen;
```

## Props

### VInput Props

- `marginTopRatio` (number): The ratio to set the top margin for the input.

### Input Props

The `VInput` component accepts standard `TextInputProps` from React Native.
