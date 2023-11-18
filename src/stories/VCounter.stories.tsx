import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VCounter from 'components/counter';

const VStepperMeta: ComponentMeta<typeof VCounter> = {
  title: 'VCounter',
  component: VCounter,
  argTypes: {},
};

export default VStepperMeta;

type VCounterStory = ComponentStory<typeof VCounter>;

export const Basic: VCounterStory = args => <VCounter {...args} />;

Basic.args = {};
