import React from 'react';
import {render} from '@testing-library/react-native';
import RootWrapper from './index';
import {describe, it, expect} from '@jest/globals';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

describe('RootWrapper component', () => {
  it('matches snapshot', () => {
    const {toJSON} = render(
      <ThemeProvider theme={theme}>
        <RootWrapper />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
