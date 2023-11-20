import {ThemeProvider} from '@emotion/react';
import RootWrapper from 'components/rootWrapper';
import VText from 'components/uiElements/text';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from 'themes/emotion';
import {Platform, UIManager} from 'react-native';
import Router from 'routes/index';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={style.safeArea}>
        <RootWrapper>
          <Router />
        </RootWrapper>
      </SafeAreaView>
    </ThemeProvider>
  );
};
export default App;

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

// export {default} from './.storybook';
