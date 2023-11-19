import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VDropDown from 'components/uiElements/dropDown';

const VDropDownMeta: ComponentMeta<typeof VDropDown> = {
  title: 'VDropDown',
  component: VDropDown,
};

export default VDropDownMeta;

type VCounterStory = ComponentStory<typeof VDropDown>;

export const Basic: VCounterStory = args => <VDropDown {...args} />;

Basic.args = {
  data: new Array(16).fill(0).map((item, index) => {
    return {
      label: index,
      value: index,
    };
  }),
};
