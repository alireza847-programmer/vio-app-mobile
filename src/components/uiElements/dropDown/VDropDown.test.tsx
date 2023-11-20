import React from 'react';
import {render} from '@testing-library/react-native';
import VDropDown from './index';
import {it, describe, expect, jest} from '@jest/globals';
import {VDropDownProps} from 'types/components/uiElements/dropDown';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

const Component = (props: VDropDownProps) => {
  return (
    <ThemeProvider theme={theme}>
      <VDropDown {...props} />
    </ThemeProvider>
  );
};

describe('VDropDown component', () => {
  it('matches snapshot with default props', () => {
    const {toJSON} = render(<Component data={[]} onChange={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with custom data and placeholder', () => {
    const data = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
    ];
    const {toJSON} = render(
      <Component
        data={data}
        placeHolder="Select an option"
        onChange={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
