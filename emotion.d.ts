import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      backgroundColor: string;
      textColor: {
        primary: string;
        placeHolder: string;
        button: {
          primary: string;
          secondary: string;
          error: string;
        };
      };
      button: {
        primary: string;
        secondary: string;
      };
      stroke: {
        button: string;
        divider: string;
        input: string;
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
}
