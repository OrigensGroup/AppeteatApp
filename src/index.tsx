import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import { ThemeProvider } from 'styled-components/native';

import { useThemeSelector } from './theme';

import { Bar } from './types/Bar';

import CartProvider from './contexts/Cart';
import MenuProvider from './contexts/Menu';
import LocationsProvider from './contexts/Locations';
import UserProvider from './contexts/User';

import LoginScreen from './screens/Login';

import TabBar from './components/shared/TabBar';

import useAuth from './hooks/useAuth';
import loadBar from './utils/loadBar';

const Stack = createStackNavigator();

const App = () => {
  const theme = useThemeSelector();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const user = useAuth();
  const [appReady, setAppReady] = useState(false);

  const [bar, setBar] = useState<Bar>({
    bookings: { list: [] },
    locations: { list: [] },
    menu: { items: [], tabs: [] },
    homepage: { sections: [] },
  });

  const loadStuff = async () => {
    try {
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
      <LocationsProvider loadedHomepage={bar.homepage} loadedLocations={bar.locations}>
        <MenuProvider loadedMenu={bar.menu}>
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
        </MenuProvider>
      </LocationsProvider>
    </ThemeProvider>
  );
};

export default App;
