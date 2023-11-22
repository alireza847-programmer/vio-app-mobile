import React, {PropsWithChildren} from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import VModal from './index';
import {it, describe, expect, jest} from '@jest/globals';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import VText from '../text';
import {VModalProps} from 'types/components/uiElements/modal';

const Component = (props: PropsWithChildren<VModalProps>) => (
  <ThemeProvider theme={theme}>
    <VModal {...props} />
  </ThemeProvider>
);

describe('VModal component', () => {
  it('matches snapshot with default props', () => {
    const {toJSON} = render(<Component isVisible={true} onClose={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with header and close button', () => {
    const {toJSON} = render(
      <Component
        isVisible={true}
        onClose={() => {}}
        title="My Modal"
        withClose
        withHeader>
        <VText>This is the content of the modal.</VText>
      </Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onClose when close button is pressed', () => {
    const onCloseMock = jest.fn();
    const {getByTestId} = render(
      <Component isVisible={true} onClose={onCloseMock} withClose withHeader>
        <VText>This is the content of the modal.</VText>
      </Component>,
    );

    const closeButton = getByTestId('close-button');
    act(() => {
      fireEvent.press(closeButton);
    });

    expect(onCloseMock).toHaveBeenCalled();
  });
});
