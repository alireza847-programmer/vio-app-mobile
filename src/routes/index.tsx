import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootStack from './root';
import {theme} from 'themes/emotion';

const Router = () => {
  const routerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  return (
    <NavigationContainer theme={routerTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
export default Router;
