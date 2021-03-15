import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import { ThemeProvider } from 'styled-components/native';

import { useThemeSelector } from './theme';

import CartProvider from './contexts/Cart';
import MenuProvider, { Menu } from './contexts/Menu';

import LoginScreen from './screens/Login';

import TabBar from './components/shared/TabBar';
import LocationsProvider, { Locations } from './contexts/Locations';

import getMenu from './utils/loadMenu';
import useAuth from './hooks/useAuth';
import getLocations from './utils/loadLocations';
import UserProvider from './contexts/User';

const Stack = createStackNavigator();

const App = () => {
  const theme = useThemeSelector();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const user = useAuth();
  const [appReady, setAppReady] = useState(false);
  const [menu, setMenu] = useState<Menu>({ items: [], tabs: [] });
  const [locations, setLocations] = useState<Locations>({ list: [] });

  const loadStuff = async () => {
    try {
      Stripe.setOptionsAsync({
        publishableKey:
          'pk_test_51IVOBfAfCAulp2YCXMxRFgdbY4LsL8Pb6guzhnevDVNweDfgD2W8UQd2GT7C2BWoB78z2mrDhhCYKXPtxmyKR0h500ZmXtM6No',
        androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
      });

      await Font.loadAsync({
        Comfortaa: require('./theme/fonts/Comfortaa-Regular.ttf'),
        ComfortaaBold: require('./theme/fonts/Comfortaa-Bold.ttf'),
        ComfortaaLight: require('./theme/fonts/Comfortaa-Light.ttf'),
      });

      const menu = await getMenu();
      const locations = await getLocations();

      const images = [
        require('./img/alex.jpg'),
        require('./img/google.png'),
        require('./img/jack.jpg'),
        require('./img/logo.png'),
        require('./img/logo2.png'),
        require('./img/venue.jpg'),
      ];

      const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      await Promise.all(cacheImages);

      setMenu(menu);
      setLocations(locations);
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
      <LocationsProvider loadedLocations={locations}>
        <MenuProvider loadedMenu={menu}>
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
                  {user == null ? (
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
