import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {HOME_PAGE} from '../const';
import HomePage from 'pages/home';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME_PAGE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_PAGE} component={HomePage} />
    </Stack.Navigator>
  );
};
export default RootStack;
