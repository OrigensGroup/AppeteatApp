import React, { useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import analytics from '@react-native-firebase/analytics';

import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

import CartProvider from './contexts/Cart';
import MenuProvider from './contexts/Menu';
import LoginScreen from './screens/Login';

import TabBar from './components/Shared/TabBar';
import Register from './screens/Register';
import LocationsProvider from './contexts/Locations';

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');
  const [loaded] = useFonts({
    Comfortaa: require('./theme/fonts/Comfortaa-Regular.ttf'),
    ComfortaaBold: require('./theme/fonts/Comfortaa-Bold.ttf'),
    ComfortaaLight: require('./theme/fonts/Comfortaa-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <LocationsProvider>
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
        </LocationsProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
