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
    backgroundColor: '#F2F2F2',
    textColor: {
      primary: '#2A333D',
      placeHolder: '#A3ACB8',
      button: {
        primary: '#FFFFFF',
        secondary: '#0071F3',
        error: '#D83B3B',
      },
    },
    button: {
      primary: '#0071F3',
      secondary: '#F7FBFF',
    },
    stroke: {
      button: '#DAE9FA',
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
