import React from 'react';
import {render} from '@testing-library/react-native';
import VButton from './index';
import {it, describe, expect} from '@jest/globals';
import {VButtonProps} from 'types/components/uiElements/button';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

// A wrapper component to provide the theme context to VButton
const Component = (props: VButtonProps) => (
  <ThemeProvider theme={theme}>
    <VButton {...props} />
  </ThemeProvider>
);

describe('VButton component', () => {
  it('renders correctly with default props', () => {
    // Arrange
    const {toJSON} = render(<Component onPress={() => {}} />);

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom title and mode', () => {
    // Arrange
    const {toJSON} = render(
      <Component onPress={() => {}} title="Click me" mode="secondary" />,
    );

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom styled prop', () => {
    // Arrange
    const {toJSON} = render(
      <Component title="Click Me" onPress={() => {}} styled="CONTENT_SIZE" />,
    );

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom icon and rightIcon', () => {
    // Arrange
    const MockIcon = () => <svg>Mock Icon</svg>;
    const {toJSON} = render(
      <Component
        onPress={() => {}}
        icon={() => <MockIcon />}
        rightIcon={() => <MockIcon />}
      />,
    );

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });
});
