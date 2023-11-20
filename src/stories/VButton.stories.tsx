import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import {PencilEditButton} from 'assets/svgs';
import VButton from 'components/uiElements/button';

const VButtonMeta: ComponentMeta<typeof VButton> = {
  title: 'VButton',
  component: VButton,
  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'error'],
    },
    styled: {
      control: {
        type: 'select',
      },
      options: ['CONTENT_SIZE', 'FULL_WIDTH', 'TEXT'],
    },
  },
};

export default VButtonMeta;

type VTextStory = ComponentStory<typeof VButton>;

export const Primary: VTextStory = args => <VButton {...args} />;

Primary.args = {
  mode: 'primary',
  title: 'Search',
};

export const Secondary: VTextStory = args => <VButton {...args} />;

Secondary.args = {
  mode: 'secondary',
  title: 'Add Room',
};

export const WithIcon: VTextStory = args => <VButton {...args} />;

WithIcon.args = {
  mode: 'secondary',
  title: 'Add Room',
  icon: fill => <PencilEditButton fill={fill} />,
};

export const ContentSized: VTextStory = args => <VButton {...args} />;

ContentSized.args = {
  mode: 'secondary',
  icon: fill => <PencilEditButton fill={fill} />,
  styled: 'CONTENT_SIZE',
};

export const TextButton: VTextStory = args => <VButton {...args} />;

TextButton.args = {
  mode: 'error',
  icon: fill => <PencilEditButton fill={fill} />,
  styled: 'TEXT',
  title: 'Remove Room',
};

export const WithSubTitle: VTextStory = args => <VButton {...args} />;

WithSubTitle.args = {
  mode: 'primary',
  icon: fill => <PencilEditButton fill={fill} />,
  styled: 'FULL_WIDTH',
  title: 'Search',
  subTitle: '1 rooms • 2 guests',
};
