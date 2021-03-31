import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

import FastImage, { Source } from 'react-native-fast-image';

import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import { ThemeProvider } from 'styled-components/native';

// eslint-disable-next-line
import { STRIPE_ACCOUNT } from '@env';

import stripe from 'tipsi-stripe';

import { Settings } from 'react-native-fbsdk-next';

import { useThemeSelector } from './theme';

import { Bar } from './types/Bar';

import CartProvider from './contexts/Cart';
import BarProvider from './contexts/Bar';
import UserProvider from './contexts/User';

import LoginScreen from './screens/Login';

import TabBar from './components/shared/TabBar';

import loadBar from './utils/loadBar';
import useAuth from './hooks/useAuth';

const Stack = createStackNavigator();

const App = () => {
  const theme = useThemeSelector();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const { user } = useAuth();
  const [appReady, setAppReady] = useState(false);

  const [bar, setBar] = useState<Bar>({
    bookings: { list: [] },
    locations: { list: [] },
    menu: { items: [], tabs: [] },
    homepage: { sections: [] },
    orders: { list: [] },
  });

  const loadStuff = async () => {
    try {
      Settings.initializeSDK();

      stripe.setOptions({
        publishableKey: STRIPE_ACCOUNT,
        androidPayMode: 'test',
      });

      await Font.loadAsync({
        Comfortaa: require('./theme/fonts/Comfortaa-Regular.ttf'),
        ComfortaaBold: require('./theme/fonts/Comfortaa-Bold.ttf'),
        ComfortaaLight: require('./theme/fonts/Comfortaa-Light.ttf'),
      });

      const loadedBar = await loadBar();

      const images = [
        require('./img/google.png'),
        require('./img/logo.png'),
        require('./img/logo2.png'),
        require('./img/ApplePay.png'),
        require('./img/GooglePay.png'),
      ];

      const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      await Promise.all(cacheImages);

      setBar(loadedBar);

      const alltogether = [...loadedBar.locations.list, ...loadedBar.menu.items];

      const imagesToLoad = alltogether.reduce((acc, item) => {
        if (item.image) {
          acc.push({ uri: item.image });
        }

        return acc;
      }, [] as Source[]);

      FastImage.preload(imagesToLoad);
    } catch (error) {
      crashlytics().recordError(error);
      console.error(error);
    } finally {
      setAppReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    crashlytics().log('App mounted.');
    SplashScreen.preventAutoHideAsync();
    loadStuff();
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <BarProvider loadedBar={bar}>
        <UserProvider>
          <CartProvider>
            <NavigationContainer
              //@ts-ignore
              onReady={() => (routeNameRef.current = navigationRef.current.getCurrentRoute().name)}
              onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                //@ts-ignore
                const currentRouteName = navigationRef.current.getCurrentRoute().name;

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
          </CartProvider>
        </UserProvider>
      </BarProvider>
    </ThemeProvider>
  );
};

export default App;
