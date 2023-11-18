import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VInput from 'components/uiElements/input/index';

const VInputMeta: ComponentMeta<typeof VInput> = {
  title: 'VInput',
  component: VInput,
  argTypes: {
    marginTopRatio: {
      step: 1,
      min: 0,
      max: 90,
      range: true,
    },
  },
};

export default VInputMeta;

type VTextStory = ComponentStory<typeof VInput>;

export const Basic: VTextStory = args => <VInput {...args} />;

Basic.args = {
  placeholder: 'e.g. city, region, district or specific hotel',
  marginTopRatio: 0,
};
