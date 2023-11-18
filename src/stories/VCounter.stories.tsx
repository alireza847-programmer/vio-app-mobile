import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VCounter from 'components/counter';

const VStepperMeta: ComponentMeta<typeof VCounter> = {
  title: 'VCounter',
  component: VCounter,
  argTypes: {
    initialNumber: {
      type: 'number',
    },
    onChange: {action: 'pressed the button'},
  },
};

export default VStepperMeta;

type VCounterStory = ComponentStory<typeof VCounter>;

export const Basic: VCounterStory = args => <VCounter {...args} />;

Basic.args = {
  initialNumber: 5,
  onChange: value => {},
};
