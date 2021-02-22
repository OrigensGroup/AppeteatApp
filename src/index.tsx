import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  const TabBar = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#cf9822',
        inactiveTintColor: '#2c2c2b',
        labelStyle: { fontSize: 10, marginBottom: 6 },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="md-home-outline" size={size} />,
        }}
      />
      <Tab.Screen
        component={Book}
        name="Book"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Antdesign color={color} name="calendar" size={size} />,
        }}
      />
      <Tab.Screen
        component={Menu}
        name="Menu"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="glass-cocktail" size={size} />,
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Account"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="account-outline" size={size} />,
        }}
      />
    </Tab.Navigator>
  );

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen component={LoginScreen} name="Login" />
          <Stack.Screen component={TabBar} name="App" />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
