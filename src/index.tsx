import React, { useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import analytics from '@react-native-firebase/analytics';

import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

import CartProvider from './contexts/Cart';
import MenuProvider from './contexts/Menu';
import LoginScreen from './screens/Login';

import TabBar from './components/Shared/TabBar';

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>('');

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <CartProvider>
          <NavigationContainer
            ref={navigationRef}
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
          >
            <Stack.Navigator headerMode="none">
              <Stack.Screen component={LoginScreen} name="Login" />
              <Stack.Screen component={TabBar} name="App" />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
