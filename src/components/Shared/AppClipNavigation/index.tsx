import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

import Menu from '../../../screens/Menu';

enableScreens();

const Stack = createStackNavigator();

interface AppNavigationProps {}

const AppNavigation: React.FunctionComponent<AppNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen component={() => <></>} name="App" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
