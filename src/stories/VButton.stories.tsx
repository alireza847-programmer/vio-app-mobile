import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {View} from 'react-native'; // Import any additional components you need
import VButton from 'components/uiElements/button';
import {VButtonProps} from 'types/components/uiElements/button';

const VButtonMeta: ComponentMeta<typeof VButton> = {
  title: 'VButton',
  component: VButton,
  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'error'],
    },
    styled: {
      control: {
        type: 'select',
      },
      options: ['TEXT', 'FULL_WIDTH', 'CONTENT_SIZE'],
    },
    width: {
      control: 'number',
    },
    onPress: {
      action: 'onPress',
    },
    // Add more argTypes as needed
  },
};

export default VButtonMeta;

type VButtonStory = ComponentStory<typeof VButton>;

export const Primary: VButtonStory = (args: VButtonProps) => (
  <VButton {...args} />
);
Primary.args = {
  mode: 'primary',
  title: 'Primary Button',
};

export const Secondary: VButtonStory = (args: VButtonProps) => (
  <VButton {...args} />
);
Secondary.args = {
  mode: 'secondary',
  title: 'Secondary Button',
};

export const Error: VButtonStory = (args: VButtonProps) => (
  <VButton {...args} />
);
Error.args = {
  mode: 'error',
  title: 'Error Button',
};

// Add more stories for different variations as needed
