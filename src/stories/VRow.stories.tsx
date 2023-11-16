import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VRow from 'components/uiElements/row';
import {View} from 'react-native';

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
      control: {
        type: 'color',
      },
    },
    fullWidth: {
      type: 'boolean',
    },
    marginTopRatio: {
      step: 1,
      min: 0,
      max: 90,
      range: true,
    },
    marginLeftRatio: {
      step: 1,
      min: 0,
      max: 90,
      range: true,
    },
    paddingHorizontalRatio: {
      step: 1,
      min: 0,
      max: 90,
      range: true,
    },
    paddingVerticalRatio: {
      step: 1,
      min: 0,
      max: 90,
      range: true,
    },
  },
};

export default VRowMeta;

type VRowStory = ComponentStory<typeof VRow>;

export const Basic: VRowStory = args => (
  <VRow {...args}>
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 7.5,
        backgroundColor: 'blue',
      }}
    />
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 7.5,
        backgroundColor: 'blue',
      }}
    />
  </VRow>
);

Basic.args = {
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'red',
  fullWidth: true,
  marginTopRatio: 0,
  marginLeftRatio: 0,
  paddingHorizontalRatio: 0,
  paddingVerticalRatio: 0,
};
