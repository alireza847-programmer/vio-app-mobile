import {EmotionThemeType} from 'types/themes/emotion';
import {hp, wp} from 'utils/dimensions';

const Fonts = {
  bold: 'Inter-Bold',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  regular: 'Inter-Regular',
};

export const theme: EmotionThemeType = {
  colors: {
    backgroundColor: '#fff',
    textColor: {
      primary: '#2A333D',
      placeHolder: '#A3ACB8',
      button: {
        primary: '#FFFFFF',
        secondary: '#0071F3',
        error: '#FFFFFF',
        disabled: '#B6B8BF',
      },
    },
    button: {
      primary: '#0071F3',
      secondary: '#F7FBFF',
      error: '#D83B3B',
      disabled: '#e8eef5',
    },
    stroke: {
      button: '#BFDAF9',
      disabledButton: '#14151A26',
      divider: '#EFF2F6',
      input: '#BED2E9',
    },
  },
  fonts: {
    bold21: {
      fontFamily: Fonts.bold,
      fontSize: 21,
    },
    medium15: {
      fontFamily: Fonts.medium,
      fontSize: 15,
    },
    semiBold16: {
      fontFamily: Fonts.semiBold,
      fontSize: 16,
    },
    semiBold18: {
      fontFamily: Fonts.semiBold,
      fontSize: 18,
    },
    regular16: {
      fontFamily: Fonts.regular,
      fontSize: 16,
    },
  },
  verticalRem: hp(0.5),
  HorizontalRem: wp(1),
  radius: wp(1),
};
