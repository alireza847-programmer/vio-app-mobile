import {ComponentMeta, ComponentStory} from '@storybook/react-native';
import VText from 'components/uiElements/text';
import {theme} from 'themes/emotion';

const VTextMeta: ComponentMeta<typeof VText> = {
  title: 'VText',
  component: VText,
  argTypes: {
    typography: {
      control: {
        type: 'select',
      },
      type: 'string',
      options: ['bold21', 'medium15', 'semiBold16', 'semiBold18', 'regular16'],
    },
    color: {
      control: 'color',
    },
    fullWidth: {
      type: 'boolean',
    },
    textAlign: {
      control: 'select',
      options: ['center', 'auto', 'left', 'right', 'justify'],
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
  },
  parameters: {
    notes: `
typography (optional): Specify the typography style for the text, choosing from 'bold21', 'medium15', 'semiBold16', 'semiBold18', 'regular16'.
Default is 'medium15'

color (optional): Set the color of the text. If not provided, it defaults to the primary text color from the theme.
textAlign (optional): Define the text alignment. Options include 'center', 'auto', 'left', 'right', and 'justify'. Default is 'center'.

marginTopRatio (optional): Adjust the top margin of the text based on a ratio. Default is 2.
marginLeftRatio (optional): Adjust the left margin of the text based on a ratio. Default is 0.
fullWidth (optional): Set the width of Component to 100%. Default is false.
    `,
  },
};

export default VTextMeta;

type VTextStory = ComponentStory<typeof VText>;

export const Basic: VTextStory = args => <VText {...args} />;

Basic.args = {
  children: 'Hello World',
  color: theme.colors.textColor.primary,
  marginTopRatio: 1,
  marginLeftRatio: 0,
  textAlign: 'center',
  typography: 'bold21',
};
