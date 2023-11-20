import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import SelectCheckDate from 'components/selectCheckDate';

const SelectCheckDateMeta: ComponentMeta<typeof SelectCheckDate> = {
  title: 'SelectCheckDate',
  component: SelectCheckDate,
  argTypes: {},
};

export default SelectCheckDateMeta;

type SelectCheckDateStory = ComponentStory<typeof SelectCheckDate>;

export const Basic: SelectCheckDateStory = args => (
  <SelectCheckDate {...args} />
);

Basic.args = {
  onSelect(params) {},
};
