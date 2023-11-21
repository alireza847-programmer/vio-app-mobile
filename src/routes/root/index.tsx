import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {GUEST_PAGE, HOME_PAGE} from '../const';
import HomePage from 'pages/home';
import {RootStackParamList} from 'types/routes/root';
import GuestPage from 'pages/guest';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME_PAGE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_PAGE} component={HomePage} />
      <Stack.Screen name={GUEST_PAGE} component={GuestPage} />
    </Stack.Navigator>
  );
};
export default RootStack;
