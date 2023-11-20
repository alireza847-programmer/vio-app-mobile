import '@emotion/react';
import {EmotionThemeType} from 'types/themes/emotion';

// Augment the module
declare module '@emotion/react' {
  export interface Theme extends EmotionThemeType {}
}
