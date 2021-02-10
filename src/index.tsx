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
import LoginScreen from './screens/Login';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  const TabBar = () => (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        style: { height: 55 },
        activeTintColor: '#cf9822',
        inactiveTintColor: '#2c2c2b',
        labelStyle: { fontSize: 10, marginBottom: 6 },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='md-home-outline' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Book'
        component={Home}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color, size }) => (
            <Antdesign name='calendar' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Menu'
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='glass-cocktail'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Home}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Antdesign name='shoppingcart' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='Account'
        component={Home}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='App' component={TabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
