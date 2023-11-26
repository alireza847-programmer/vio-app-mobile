# VText Component Documentation

## Overview

The `VText` component is a versatile text element crafted to seamlessly integrate with Emotion and TypeScript in your React Native project. It offers a simple and efficient way to style text components with a range of customizable properties.

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

- **typography** (optional): Specifies the typography style for the text. Options include 'bold21', 'medium15', 'semiBold16', 'semiBold18', 'regular16'. The default is 'medium15'.

- **color** (optional): Sets the color of the text. If not provided, it defaults to the primary text color from the theme.

- **textAlign** (optional): Defines the text alignment. Options include 'center', 'auto', 'left', 'right', and 'justify'. The default is 'center'.

- **marginTopRatio** (optional): Adjusts the top margin of the text based on a ratio. The default is 2.

- **marginLeftRatio** (optional): Adjusts the left margin of the text based on a ratio. The default is 0.

- **fullWidth** (optional): Sets the width of the component to 100%. The default is false.

- **width** (optional): Sets the width of the component. If provided, it overrides the fullWidth prop. No default value.
