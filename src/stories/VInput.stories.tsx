import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {View} from 'react-native'; // Import any additional components you need
import VInput from 'components/uiElements/input';
import {VInputProps} from 'types/components/uiElements/input';

const VInputMeta: ComponentMeta<typeof VInput> = {
  title: 'VInput',
  component: VInput,
  argTypes: {
    marginTopRatio: {
      control: 'number',
    },
  },
};

export default VInputMeta;

type VInputStory = ComponentStory<typeof VInput>;

export const Default: VInputStory = (args: VInputProps) => <VInput {...args} />;
Default.args = {
  marginTopRatio: 1,
  placeholder: 'Hi , Im placeholder',
};
