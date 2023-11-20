import React from 'react';
import {render} from '@testing-library/react-native';
import VButton from './index';
import {it, describe, expect, jest} from '@jest/globals';
import {VButtonProps} from 'types/components/uiElements/button';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

const Component = (props: VButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <VButton {...props} />
    </ThemeProvider>
  );
};
describe('VButton component', () => {
  it('matches snapshot with default props', () => {
    const {toJSON} = render(<Component onPress={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom title and mode', () => {
    const {toJSON} = render(
      <Component onPress={() => {}} title="Click me" mode="secondary" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom styled prop', () => {
    const {toJSON} = render(
      <Component title="Click Me" onPress={() => {}} styled="CONTENT_SIZE" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom icon and rightIcon', () => {
    const MockIcon = () => <svg>Mock Icon</svg>;
    const {toJSON} = render(
      <Component
        onPress={() => {}}
        icon={() => <MockIcon />}
        rightIcon={() => <MockIcon />}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
