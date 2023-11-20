import React from 'react';
import {render} from '@testing-library/react-native';
import VInput from './index';
import {it, describe, expect} from '@jest/globals';
import {VInputProps} from 'types/components/uiElements/input';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

const Component = (props: VInputProps) => (
  <ThemeProvider theme={theme}>
    <VInput {...props} />
  </ThemeProvider>
);

describe('VInput component', () => {
  it('matches snapshot with default props', () => {
    const {toJSON} = render(<Component />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom marginTopRatio', () => {
    const {toJSON} = render(<Component marginTopRatio={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
