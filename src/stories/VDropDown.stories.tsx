import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {View} from 'react-native'; // Import any additional components you need
import VDropDown from 'components/uiElements/dropDown';
import {VDropDownProps} from 'types/components/uiElements/dropDown';

const VDropDownMeta: ComponentMeta<typeof VDropDown> = {
  title: 'VDropDown',
  component: VDropDown,
  argTypes: {
    data: {
      control: 'array',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export default VDropDownMeta;

type VDropDownStory = ComponentStory<typeof VDropDown>;

export const Default: VDropDownStory = (args: VDropDownProps) => (
  <VDropDown {...args} />
);
Default.args = {
  data: ['Option 1', 'Option 2', 'Option 3'],
  placeHolder: 'Select an option',
  title: 'Dropdown Title',
  defaultValue: 0,
  testID: 1,
};
