import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import analytics from '@react-native-firebase/analytics';

import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

import CartProvider from './contexts/Cart';
import MenuProvider from './contexts/Menu';
import LoginScreen from './screens/Login';

import TabBar from './components/Shared/TabBar';

const Stack = createStackNavigator();

// const getActiveRouteName = (navigationState: any) => {
//   if (!navigationState) return null;
//   const route = navigationState.routes[navigationState.index];
//   // Parse the nested navigators
//   if (route.routes) return getActiveRouteName(route);
//   return route.routeName;
// };

// onNavigationStateChange={(prevState, currentState) => {
//   const currentScreen = getActiveRouteName(currentState);
//   const prevScreen = getActiveRouteName(prevState);

//   if (prevScreen !== currentScreen) {
//     // Update Firebase with the name of your screen
//     analytics().logScreenView({
//       screen_name: currentScreen,
//       screen_class: currentScreen,
//     });
//   }
// }}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <CartProvider>
          <NavigationContainer>
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
