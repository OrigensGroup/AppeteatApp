import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

import analytics from '@react-native-firebase/analytics';

import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

import CartProvider from './contexts/Cart';
import MenuProvider, { Menu } from './contexts/Menu';

import LoginScreen from './screens/Login';
import Register from './screens/Register';

import TabBar from './components/Shared/TabBar';

import getMenu from './utils/loadMenu';

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');

  const [appReady, setAppReady] = useState(false);
  const [menu, setMenu] = useState<Menu>({ items: [], tabs: [] });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadStuff();
  }, []);

  const loadStuff = async () => {
    try {
      await Font.loadAsync({
        Comfortaa: require('./theme/fonts/Comfortaa-Regular.ttf'),
        ComfortaaBold: require('./theme/fonts/Comfortaa-Bold.ttf'),
        ComfortaaLight: require('./theme/fonts/Comfortaa-Light.ttf'),
      });

      const menu = await getMenu();

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
    } catch (error) {
      console.error(error);
    } finally {
      setAppReady(true);
      SplashScreen.hideAsync();
    }
  };

  if (!appReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
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
              <Stack.Screen component={LoginScreen} name="Login" />
              <Stack.Screen component={Register} name="Register" />
              <Stack.Screen component={TabBar} name="App" />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
