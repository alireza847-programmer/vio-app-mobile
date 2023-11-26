import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import GuestPicker from './index';
import {useRoomsStore} from 'stores/rooms';
import {describe, jest, test, expect, beforeEach} from '@jest/globals';
import {GuestPickerProps} from 'types/components/guestPicker';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

const Component = (props: GuestPickerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GuestPicker {...props} />
    </ThemeProvider>
  );
};
describe('GuestPicker Component', () => {
  beforeEach(() => {
    useRoomsStore.getState().setParams('1');
  });
  test('can add up to eight rooms', async () => {
    const {getByTestId} = render(<Component />);

    for (let i = 1; i <= 7; i++) {
      await act(() => fireEvent.press(getByTestId('add-room-button')));
    }
    expect(getByTestId('maximum-room-text')).toBeTruthy();
  });

  test('each room has at least one adult and up to a maximum of five', async () => {
    const {getAllByTestId} = render(<Component />);

    const incrementAdultButton = getAllByTestId('increment-adult-button')[0];

    // Increment adult count to the maximum (5)
    for (let i = 1; i <= 4; i++) {
      await act(() => fireEvent.press(incrementAdultButton));
    }
    // Assert that the adult count is 5
    expect(incrementAdultButton.props.style.backgroundColor).toBe(
      theme.colors.button.disabled,
    );
  });

  test('each room has zero or more children up to a maximum of three', async () => {
    const {getAllByTestId} = render(<Component />);

    const incrementChildButton = getAllByTestId('increment-child-button')[0];

    // Increment child count to the maximum (3)
    for (let i = 1; i <= 3; i++) {
      await act(() => fireEvent.press(incrementChildButton));
    }

    // Assert that the child count is 3
    expect(incrementChildButton.props.style.backgroundColor).toBe(
      theme.colors.button.disabled,
    );
  });
  test('Each room has a maximum occupancy of five. This is, adults plus children per room', async () => {
    const {getAllByTestId} = render(<Component />);

    const incrementChildButton = getAllByTestId('increment-child-button')[0];
    const incrementAdultButton = getAllByTestId('increment-adult-button')[0];

    // Increment child count to (3)
    for (let i = 1; i <= 3; i++) {
      await act(() => fireEvent.press(incrementChildButton));
    }
    // Increment adult count to (2)
    for (let i = 1; i <= 1; i++) {
      await act(() => fireEvent.press(incrementAdultButton));
    }
    console.log(useRoomsStore.getState().rooms);
    // Assert that the maximum guests 5
    expect(incrementAdultButton.props.style.backgroundColor).toBe(
      theme.colors.button.disabled,
    );
    expect(incrementChildButton.props.style.backgroundColor).toBe(
      theme.colors.button.disabled,
    );
  });

  test('The Guest and Room selector should always yield a valid room occupancy, disable the button to avoid invalid configurations', async () => {
    const {getAllByTestId, getByTestId} = render(<Component />);

    const incrementChildButton = getAllByTestId('increment-child-button')[0];
    const searchButton = getByTestId('search-button');

    // Increment child count to (1)
    for (let i = 1; i <= 1; i++) {
      await act(() => fireEvent.press(incrementChildButton));
    }

    // Search button shild be disabled if any child without age exists
    expect(searchButton.props.style.backgroundColor).toBe(
      theme.colors.button.disabled,
    );
  });

  test('The Guest and Room selector should always yield a valid room occupancy, disable the button to avoid invalid configurations and enable the button after select age', async () => {
    const {getAllByTestId, getByTestId} = render(<Component />);

    const incrementChildButton = getAllByTestId('increment-child-button')[0];
    const searchButton = getByTestId('search-button');

    // Increment child count to (1)
    for (let i = 1; i <= 1; i++) {
      await act(() => fireEvent.press(incrementChildButton));
    }

    // Search button shild be disabled if any child without age exists
    expect(searchButton.props.style.backgroundColor).toBe(
      theme.colors.button.disabled,
    );

    const dropDownButton = getAllByTestId('dropdown-touchable')[0];
    await act(() => fireEvent.press(dropDownButton));

    const dropDownConfirmButton = getAllByTestId('confirm-button')[0];
    await act(() => fireEvent.press(dropDownConfirmButton));

    expect(searchButton.props.style.backgroundColor).toBe(
      theme.colors.button.primary,
    );
  });

  test('It is important that the state of the application can be deep-linked after a user clicked Search', async () => {
    const onSearch = jest.fn();
    const {getAllByTestId, getByTestId} = render(
      <Component onSearch={onSearch} />,
    );
    const incrementChildButton = getAllByTestId('increment-child-button')[0];
    const incrementAdultButton = getAllByTestId('increment-adult-button')[0];
    const searchButton = getByTestId('search-button');

    // Add new child
    await act(() => fireEvent.press(incrementChildButton));
    const dropDownButton = getAllByTestId('dropdown-touchable')[0];

    // add new adult
    await act(() => fireEvent.press(incrementAdultButton));

    // open dropDown
    await act(() => fireEvent.press(dropDownButton));

    // select child 1 age
    const dropDownConfirmButton = getByTestId('confirm-button');
    await act(() => fireEvent.press(dropDownConfirmButton));

    // press the search button
    await act(() => fireEvent.press(searchButton));

    expect(onSearch).toBeCalledWith('2:0');

    // add new Room
    await act(() => fireEvent.press(getByTestId('add-room-button')));
    await act(() => fireEvent.press(searchButton));

    expect(onSearch).toBeCalledWith('2:0|1');
  });
});
