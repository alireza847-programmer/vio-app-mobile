import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import VDropDown from './index';
import {it, describe, expect, jest} from '@jest/globals';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import {VDropDownProps} from 'types/components/uiElements/dropDown';

const Component = (props: VDropDownProps) => (
  <ThemeProvider theme={theme}>
    <VDropDown {...props} />
  </ThemeProvider>
);

describe('VDropDown component', () => {
  const data = ['Option 1', 'Option 2', 'Option 3'];
  const onChangeMock = jest.fn();

  it('matches snapshot with default props', () => {
    const {toJSON} = render(
      <Component
        title="Select an option"
        data={data}
        placeHolder="Select an option"
        onChange={onChangeMock}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('opens modal when pressed', () => {
    const {getByTestId} = render(
      <Component
        title="Select an option"
        data={data}
        placeHolder="Select an option"
        onChange={onChangeMock}
      />,
    );

    const touchable = getByTestId('dropdown-touchable');
    fireEvent.press(touchable);

    const modal = getByTestId('modal-backdrop');
    expect(modal).toBeDefined();
  });

  it('selects a value from the modal', () => {
    const {getByTestId, getByText} = render(
      <Component
        title="Select an option"
        data={data}
        placeHolder="Select an option"
        onChange={onChangeMock}
      />,
    );

    const touchable = getByTestId('dropdown-touchable');
    fireEvent.press(touchable);

    const optionToSelect = getByText(data[1]);
    fireEvent.press(optionToSelect);

    // Ensure that the selected value is displayed
    expect(getByText(data[1])).toBeDefined();
  });

  it('calls onChange when confirming the selection', () => {
    const {getByTestId} = render(
      <Component
        title="Select an option"
        data={data}
        placeHolder="Select an option"
        onChange={onChangeMock}
      />,
    );

    const touchable = getByTestId('dropdown-touchable');
    fireEvent.press(touchable);

    const confirmButton = getByTestId('confirm-button');
    fireEvent.press(confirmButton);

    // Ensure that onChange is called
    expect(onChangeMock).toHaveBeenCalled();
  });
});
