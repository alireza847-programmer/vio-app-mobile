# VButton Component

## Overview

The `VButton` component is a versatile button designed for use in React Native applications. It offers flexibility in styling and functionality, making it suitable for various use cases.

## Style

The styling for the `VButton` component is defined in the `Button` module, utilizing Emotion's styling system. It supports various styles and modes, providing a consistent appearance across your application.

```jsx
import styled from '@emotion/native';
import {ButtonProps} from 'types/components/uiElements/button';

const Button = styled.TouchableOpacity<ButtonProps>(
  ({theme, mode = 'primary', styled = 'FULL_WIDTH'}) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: theme.verticalRem * 4,
    borderRadius: theme.radius * 2,
    borderColor: theme.colors.stroke.button,
    ...(styled === 'FULL_WIDTH' && {width: '100%'}),
    ...(styled === 'CONTENT_SIZE' && {
      paddingHorizontal: theme.HorizontalRem * 4,
    }),
    ...(styled !== 'TEXT' && {backgroundColor: theme.colors.button[mode]}),
    ...(mode === 'secondary' && styled !== 'TEXT' && {borderWidth: 1}),
  }),
);

export default Button;
```

## Props

### VButton Props

- `mode` (string): The mode of the button. It can be 'primary', 'secondary', or 'error'.
- `styled` (string): The style of the button. It can be 'TEXT', 'FULL_WIDTH', or 'CONTENT_SIZE'.
- `title` (string): The main text displayed on the button.
- `icon` (function): A function that takes a fill color as a parameter and returns a JSX element for the button icon.
- `rightIcon` (function): Similar to `icon`, but positions the icon on the right side of the button.
- `subTitle` (string): An additional text displayed below the main title.
- `onPress` (function): A callback function to be executed when the button is pressed.
