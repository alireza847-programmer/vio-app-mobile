import React, {PropsWithChildren} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {View} from 'react-native';
import VRow from 'components/uiElements/row';
import {VRowProps} from 'types/components/uiElements/row';

const VRowMeta: ComponentMeta<typeof VRow> = {
  title: 'VRow',
  component: VRow,
  argTypes: {
    justifyContent: {
      control: {
        type: 'select',
      },
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: {
        type: 'select',
      },
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    },
    backgroundColor: {
      control: 'color',
    },
    fullWidth: {
      control: 'boolean',
    },
    marginTopRatio: {
      control: 'number',
    },
    marginLeftRatio: {
      control: 'number',
    },
    paddingHorizontalRatio: {
      control: 'number',
    },
    paddingVerticalRatio: {
      control: 'number',
    },
    paddingLeftRatio: {
      control: 'number',
    },
    paddingRightRatio: {
      control: 'number',
    },
    marginRighRatio: {
      control: 'number',
    },
    minWidth: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export default VRowMeta;

type VRowStory = ComponentStory<typeof VRow>;

export const Default: VRowStory = (args: PropsWithChildren<VRowProps>) => (
  <VRow {...args} />
);
Default.args = {
  children: (
    <>
      <View style={{width: 30, height: 30, backgroundColor: 'blue'}} />
      <View style={{width: 30, height: 30, backgroundColor: 'blue'}} />
    </>
  ),
};

export const CustomStyle: VRowStory = (args: PropsWithChildren<VRowProps>) => (
  <VRow {...args}>
    <View style={{width: 30, height: 30, backgroundColor: 'blue'}} />
    <View style={{width: 30, height: 30, backgroundColor: 'blue'}} />
  </VRow>
);
CustomStyle.args = {
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'lightblue',
  fullWidth: true,
  marginTopRatio: 2,
  marginLeftRatio: 2,
  paddingHorizontalRatio: 2,
  paddingVerticalRatio: 2,
  paddingLeftRatio: 2,
  paddingRightRatio: 2,
  marginRighRatio: 2,
  minWidth: '50%',
  width: 200,
  height: 100,
};
