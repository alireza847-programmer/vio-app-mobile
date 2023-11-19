import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VDropDown from 'components/uiElements/dropDown';

const VDropDownMeta: ComponentMeta<typeof VDropDown> = {
  title: 'VDropDown',
  component: VDropDown,
};

export default VDropDownMeta;

type VDropDownStory = ComponentStory<typeof VDropDown>;

export const Basic: VDropDownStory = args => <VDropDown {...args} />;

Basic.args = {
  data: new Array(16).fill(0).map((item, index) => {
    return {
      // label: index,
      // value: index,
      label: index.toString(),
      value: index,
    };
  }),
  placeHolder: 'Age',
  onChange(value) {},
};
