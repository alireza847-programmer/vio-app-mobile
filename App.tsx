import {ThemeProvider} from '@emotion/react';
import RootWrapper from 'components/rootWrapper';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {EmotionTheme} from 'themes/emotion';

const App = () => {
  return (
    <ThemeProvider theme={EmotionTheme}>
      <SafeAreaView style={style.safeArea}>
        <RootWrapper></RootWrapper>
      </SafeAreaView>
    </ThemeProvider>
  );
};
export default App;

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: EmotionTheme.colors.backgroundColor,
  },
});
