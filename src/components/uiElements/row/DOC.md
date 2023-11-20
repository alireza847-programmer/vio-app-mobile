# VRow Component Documentation

## Overview

The `VRow` component is a versatile row container designed for use in React Native projects. It provides flexibility in styling, allowing you to easily manage the layout of child components within a row.

## Usage

```jsx
import VRow, {RowProps} from 'path-to-your-component/VRow';

const MyComponent = () => {
  return (
    <VRow
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="#f0f0f0"
      fullWidth={true}
      marginTopRatio={2}
      marginLeftRatio={1}
      paddingHorizontalRatio={1}
      paddingVerticalRatio={1}>
      {/* Your child components here */}
    </VRow>
  );
};
```

## Props

justifyContent (optional): Control the horizontal alignment of child components. Options include 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', and 'space-evenly'.

alignItems (required): Set the vertical alignment of child components. Options include 'flex-start', 'flex-end', 'center', 'stretch', and 'baseline'.

backgroundColor (optional): Apply a background color to the row container.

fullWidth (optional): If set to true, the row will take up the full width of its parent container. Default is true.

marginTopRatio (optional): Adjust the top margin of the row based on a ratio.

marginLeftRatio (optional): Adjust the left margin of the row based on a ratio.

paddingHorizontalRatio (optional): Adjust the horizontal padding of the row based on a ratio.

paddingVerticalRatio (optional): Adjust the vertical padding of the row based on a ratio.
