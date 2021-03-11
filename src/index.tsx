import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

import CartProvider from './contexts/Cart';
import MenuProvider, { Menu } from './contexts/Menu';

import LoginScreen from './screens/Login';

import TabBar from './components/shared/TabBar';
import Register from './screens/Register';
import LocationsProvider, { Locations } from './contexts/Locations';

import getMenu from './utils/loadMenu';
import useAuth from './hooks/useAuth';
import getLocations from './utils/loadLocations';

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const user = useAuth();
  const [appReady, setAppReady] = useState(false);
  const [menu, setMenu] = useState<Menu>({ items: [], tabs: [] });
  const [locations, setLocations] = useState<Locations>({ list: [] });

  const loadStuff = async () => {
    try {
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
      SplashScreen.hideAsync();
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
                  <>
                    <Stack.Screen component={LoginScreen} name="Login" />
                    <Stack.Screen component={Register} name="Register" />
                  </>
                ) : (
                  <Stack.Screen component={TabBar} name="App" />
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </CartProvider>
        </MenuProvider>
      </LocationsProvider>
    </ThemeProvider>
  );
};

export default App;
