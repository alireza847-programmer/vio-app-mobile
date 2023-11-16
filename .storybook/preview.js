import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';
import {theme} from 'themes/emotion';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: theme.HorizontalRem * 4,
        }}>
        <Story />
      </View>
    </ThemeProvider>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
