# VText Component Documentation

## Overview

The `VText` component is a customizable text element designed to work seamlessly with Emotion and TypeScript in a React Native project. It provides a straightforward way to style text components with various properties.

## Usage

```jsx
const MyComponent = () => {
  return (
    <VText
      typography="medium15"
      color="#333"
      textAlign="center"
      marginTopRatio={2}
      marginLeftRatio={0}>
      Your text content here
    </VText>
  );
};
```

## Props

typography (optional): Specify the typography style for the text, choosing from 'bold21', 'medium15', 'semiBold16', 'semiBold18', 'regular16'.
Default is 'medium15'

color (optional): Set the color of the text. If not provided, it defaults to the primary text color from the theme.

textAlign (optional): Define the text alignment. Options include 'center', 'auto', 'left', 'right', and 'justify'. Default is 'center'.

marginTopRatio (optional): Adjust the top margin of the text based on a ratio. Default is 2.

marginLeftRatio (optional): Adjust the left margin of the text based on a ratio. Default is 0.

fullWidth (optional): Set the width of Component to 100%. Default is false.
