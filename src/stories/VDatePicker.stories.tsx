import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VDatePicker from 'components/uiElements/datePicker';
import {theme} from 'themes/emotion';

const VDatePickerMeta: ComponentMeta<typeof VDatePicker> = {
  title: 'VDatePicker',
  component: VDatePicker,
  argTypes: {
    onChange: {
      type: 'function',
    },
  },
};

export default VDatePickerMeta;

type VDatePickerStory = ComponentStory<typeof VDatePicker>;

export const Basic: VDatePickerStory = args => <VDatePicker {...args} />;

Basic.args = {
  onChange(params) {},
};
