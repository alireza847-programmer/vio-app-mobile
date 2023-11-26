# VModal Component Documentation

## Overview

The `VModal` component provides a flexible and customizable modal interface for React Native applications. It is built on top of the `react-native-modal` library and includes options for adding headers, close buttons, and custom content.

## Usage

```jsx
import React, {useState} from 'react';
import VModal from './VModal'; // Adjust the import path based on your project structure
import {View, Text} from 'react-native';
import {theme} from 'themes/emotion';

const MyComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <VModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        title="My Modal"
        withClose
        withHeader>
        {/* Your custom content here */}
        <Text>This is the content of the modal.</Text>
      </VModal>

      <Button title="Open Modal" onPress={toggleModal} />
    </View>
  );
};

export default MyComponent;
```

## Props

### VModal Props

- `isVisible` (boolean, required): Controls the visibility of the modal.
- `onClose` (function, required): Function to be called when the modal is closed.
- `title` (string): The title displayed in the modal header.
- `withClose` (boolean): If `true`, a close button is displayed in the header. Default is `false`.
- `withHeader` (boolean): If `true`, a header is displayed with an optional close button and title. Default is `true`.

## Style

The styling for the `VModal` component is defined in the `style` module. It uses Emotion's styling system for enhanced readability and maintainability.

```jsx
import styled, {css} from '@emotion/native';
import VRow from '../row';

export const modalStyle = css({
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  marginBottom: 10,
});

export const Wrapper = styled.View(({theme}) => ({
  backgroundColor: theme.colors.backgroundColor,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.radius * 2,
  width: '95%',
}));

export const HeaderContainer = styled(VRow)(({theme}) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.stroke.divider,
}));
```
