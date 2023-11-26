interface FontProps {
  fontFamily: string;
  fontSize: number;
}

export interface EmotionThemeType {
  colors: {
    backgroundColor: string;
    textColor: {
      primary: string;
      placeHolder: string;
      button: {
        primary: string;
        secondary: string;
        error: string;
        disabled: string;
      };
    };
    button: {
      primary: string;
      secondary: string;
      error: string;
      disabled: string;
    };
    stroke: {
      button: string;
      divider: string;
      input: string;
      disabledButton: string;
    };
  };
  fonts: {
    bold21: FontProps;
    medium15: FontProps;
    semiBold16: FontProps;
    semiBold18: FontProps;
    regular16: FontProps;
  };
  verticalRem: number;
  HorizontalRem: number;
  radius: number;
}
