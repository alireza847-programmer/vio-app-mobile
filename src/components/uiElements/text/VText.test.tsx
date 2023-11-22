import React, {PropsWithChildren} from 'react';
import VText from './index'; // replace with the actual path
import {it, describe, expect, jest} from '@jest/globals';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import {TextProps} from 'types/components/uiElements/text';
import {render} from '@testing-library/react-native';

const Component = (props: PropsWithChildren<TextProps>) => (
  <ThemeProvider theme={theme}>
    <VText {...props}>{props.children}</VText>
  </ThemeProvider>
);

describe('VText component', () => {
  it('matches snapshot with default props', () => {
    const {toJSON} = render(<Component>Hello, VText!</Component>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with center alignment', () => {
    const {toJSON} = render(
      <Component textAlign="center">Centered Text</Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom typography', () => {
    const {toJSON} = render(
      <Component typography="bold21">Bold Text</Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with fullWidth prop', () => {
    const {toJSON} = render(<Component fullWidth>Full Width Text</Component>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom margin ratios', () => {
    const {toJSON} = render(
      <Component marginTopRatio={1} marginLeftRatio={2} fullWidth>
        Custom Margins
      </Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
