import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as SplashScreen from 'expo-splash-screen';

import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

// eslint-disable-next-line

import { enableScreens } from 'react-native-screens';

import { Bar } from './types/Bar';

import CartProvider from './contexts/Cart';
import BarProvider from './contexts/Bar';
import UserProvider from './contexts/User';

import LoginScreen from './screens/Login';

import TabBar from './components/shared/TabBar';

import { barInit } from './utils/loadBar';
import useAuth from './hooks/useAuth';
import NotificationProvider from './contexts/Notification';
import { CustomTheme } from './components/shared/CustomTheme';
import { loadStuff } from './utils/loadApp';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const { user } = useAuth();
  const [appReady, setAppReady] = useState(false);

  const [bar, setBar] = useState<Bar>(barInit);

  const initApp = async () => {
    const foundBar = await loadStuff();
    setBar(foundBar);
    setAppReady(true);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    crashlytics().log('App mounted.');
    SplashScreen.preventAutoHideAsync();
    initApp();
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <BarProvider loadedBar={bar}>
      <NotificationProvider>
        <UserProvider>
          <CartProvider>
            <CustomTheme>
              <NavigationContainer
                onReady={() => (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name ?? '')}
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
                  {user === null ? (
                    <Stack.Screen component={LoginScreen} name="Login" />
                  ) : (
                    <Stack.Screen component={TabBar} name="App" />
                  )}
                </Stack.Navigator>
              </NavigationContainer>
            </CustomTheme>
          </CartProvider>
        </UserProvider>
      </NotificationProvider>
    </BarProvider>
  );
};

export default App;
