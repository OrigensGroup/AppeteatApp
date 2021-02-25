import React, { useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import analytics from '@react-native-firebase/analytics';

import { ThemeProvider } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from './theme';

import Home from './screens/Home';
import Menu from './screens/Menu';
import LoginScreen from './screens/Login';
import Book from './screens/Book';

import Profile from './screens/Profile';
import CartProvider from './contexts/Cart';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function getActiveRouteName(navigationState) {
  if (!navigationState) return null;
  const route = navigationState.routes[navigationState.index];
  // Parse the nested navigators
  if (route.routes) return getActiveRouteName(route);
  return route.routeName;
}

const App = () => {
  const navigationRef = useRef<NavigationContainerRef | null>();

  const TabBar = () => (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Home"
      lazy
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.active,
        inactiveTintColor: theme.colors.inactive,
        labelStyle: { fontSize: 10, marginBottom: 6 },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="md-home-outline" size={size} />,
        }}
      />
      <Tab.Screen
        component={Menu}
        name="Menu"
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="glass-cocktail" size={size} />,
        }}
      />
      <Tab.Screen
        component={Book}
        name="Book"
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color, size }) => <Antdesign color={color} name="calendar" size={size} />,
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Account"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="account-outline" size={size} />,
        }}
      />
    </Tab.Navigator>
  );

  TabBar.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    const routeName = navigation.state.routes[navigation.state.index].routeName;

    if (routeName == 'Menu') {
      tabBarVisible = false;
    }

    return {
      tabBarVisible,
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <NavigationContainer
          onNavigationStateChange={async (prevState, currentState) => {
            const currentScreen = getActiveRouteName(currentState);
            const prevScreen = getActiveRouteName(prevState);

            if (prevScreen !== currentScreen) {
              // Update Firebase with the name of your screen
              await analytics().logScreenView({
                screen_name: currentScreen,
                screen_class: currentScreen,
              });
            }
          }}
        >
          <Stack.Navigator headerMode="none">
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={TabBar} name="App" />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
