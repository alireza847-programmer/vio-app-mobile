import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootStack from './root';
import {useRoomsStore} from 'stores/rooms';

const Router = () => {
  const setParams = useRoomsStore(state => state.setParams);
  const routerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  const linking = {
    prefixes: ['vioapp://', 'https://vioapp.com'],
    config: {
      screens: {
        homePage: {
          path: 'room',
          parse: {
            link: (link: string) => setParams(link),
          },
        },
      },
    },
  };
  return (
    <NavigationContainer linking={linking} theme={routerTheme}>
      <RootStack />
    </NavigationContainer>
  );
};
export default Router;
