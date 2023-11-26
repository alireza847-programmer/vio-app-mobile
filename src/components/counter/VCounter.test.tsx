import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {test, describe, expect, jest} from '@jest/globals';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import {VCounterProps} from 'types/components/counter';
import VCounter from './index';

describe('VCounter Component', () => {
  const Component = (props: VCounterProps) => (
    <ThemeProvider theme={theme}>
      <VCounter {...props} />
    </ThemeProvider>
  );

  test('renders correctly', () => {
    const {getByTestId} = render(<Component onChange={() => {}} />);
    const counterComponent = getByTestId('v-counter');
    expect(counterComponent).toBeTruthy();
  });

  test('initial number is displayed', () => {
    const {getByText} = render(
      <Component initialNumber={5} onChange={() => {}} />,
    );
    const initialNumberText = getByText('5');
    expect(initialNumberText).toBeTruthy();
  });

  test('increments and decrements count correctly', () => {
    const onChangeMock = jest.fn();
    const {getByTestId} = render(<Component onChange={onChangeMock} />);

    const incrementButton = getByTestId('increment-button');
    const decrementButton = getByTestId('decrement-button');
    const countText = getByTestId('count-text');

    fireEvent.press(incrementButton);
    expect(countText).toHaveTextContent('1');
    expect(onChangeMock).toHaveBeenCalledWith(1);

    fireEvent.press(decrementButton);
    expect(countText).toHaveTextContent('0');
    expect(onChangeMock).toHaveBeenCalledWith(0);
  });

  test('increments and decrements count correctly with initial number', () => {
    const onChangeMock = jest.fn();
    const {getByTestId} = render(
      <Component initialNumber={5} onChange={onChangeMock} />,
    );

    const incrementButton = getByTestId('increment-button');
    const decrementButton = getByTestId('decrement-button');
    const countText = getByTestId('count-text');

    fireEvent.press(incrementButton);
    expect(countText).toHaveTextContent('6');
    expect(onChangeMock).toHaveBeenCalledWith(6);

    fireEvent.press(decrementButton);
    expect(countText).toHaveTextContent('5');
    expect(onChangeMock).toHaveBeenCalledWith(5);
  });

  test('respects sumRule and minusRule props', () => {
    const onChangeMock = jest.fn();
    const {getByTestId} = render(
      <Component onChange={onChangeMock} sumRule={false} minusRule={false} />,
    );

    const incrementButton = getByTestId('increment-button');
    const decrementButton = getByTestId('decrement-button');
    const countText = getByTestId('count-text');

    fireEvent.press(incrementButton);
    expect(countText).toHaveTextContent('0'); // Since sumRule is false, count shouldn't change
    expect(onChangeMock).not.toHaveBeenCalled();

    fireEvent.press(decrementButton);
    expect(countText).toHaveTextContent('0'); // Since minusRule is false, count shouldn't change
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
