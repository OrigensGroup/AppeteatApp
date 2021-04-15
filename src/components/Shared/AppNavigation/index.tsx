import React, { useRef } from 'react';

import analytics from '@react-native-firebase/analytics';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

import LoginScreen from '../../../screens/Login';

import TabBar from '../TabBar';
import useUserData from '../../../hooks/useUserData';

enableScreens();

const Stack = createStackNavigator();

interface AppNavigationProps {}

const AppNavigation: React.FunctionComponent<AppNavigationProps> = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const { loggedIn } = useUserData();
  return (
    <NavigationContainer
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name ?? '';
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? '';

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        routeNameRef.current = currentRouteName;
      }}
      ref={navigationRef}
    >
      <Stack.Navigator headerMode="none">
        {!loggedIn ? (
          <Stack.Screen component={LoginScreen} name="Login" />
        ) : (
          <Stack.Screen component={TabBar} name="App" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
