import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import VText from 'components/uiElements/text';
import {VTextProps} from 'types/components/uiElements/text';

const VTextMeta: ComponentMeta<typeof VText> = {
  title: 'VText',
  component: VText,
  argTypes: {
    typography: {
      control: {
        type: 'select',
      },
      options: ['bold21', 'medium15', 'semiBold16', 'semiBold18', 'regular16'],
    },
    color: {
      control: 'color',
    },
    textAlign: {
      control: {
        type: 'select',
      },
      options: ['center', 'auto', 'left', 'right', 'justify'],
    },
    marginTopRatio: {
      control: 'number',
    },
    marginLeftRatio: {
      control: 'number',
    },
    fullWidth: {
      control: 'boolean',
    },
    width: {
      control: 'number',
    },
  },
};

export default VTextMeta;

type VTextStory = ComponentStory<typeof VText>;

export const Default: VTextStory = (args: VTextProps) => <VText {...args} />;
Default.args = {
  children: 'Default Text',
};

export const CustomStyle: VTextStory = (args: VTextProps) => (
  <VText {...args}>Custom Style Text</VText>
);
CustomStyle.args = {
  children: 'Custom Style Text',
  color: 'red',
  textAlign: 'left',
  marginTopRatio: 2,
  marginLeftRatio: 2,
  fullWidth: true,
  width: 200,
};

// Add more stories for different variations as needed
