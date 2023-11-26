import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {View} from 'react-native'; // Import any additional components you need
import VDatePicker from 'components/uiElements/datePicker';
import {VDatePickerProps} from 'types/components/uiElements/datePicker';

const VDatePickerMeta: ComponentMeta<typeof VDatePicker> = {
  title: 'VDatePicker',
  component: VDatePicker,
  argTypes: {
    visible: {
      control: 'boolean',
    },
    startDate: {
      control: 'date',
    },
    endDate: {
      control: 'date',
    },
    onClose: {
      action: 'onClose',
    },
    onConfirm: {
      action: 'onConfirm',
    },
    // Add more argTypes as needed
  },
};

export default VDatePickerMeta;

type VDatePickerStory = ComponentStory<typeof VDatePicker>;

export const Default: VDatePickerStory = (args: VDatePickerProps) => (
  <VDatePicker {...args} />
);
Default.args = {
  visible: false,
  onClose: () => {},
  onConfirm: params => console.log(params),
};

// Add more stories for different variations as needed
