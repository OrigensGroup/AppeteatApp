import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../../screens/Home';
import Menu from '../../../screens/Menu';
import Book from '../../../screens/Book';
import Profile from '../../../screens/Profile';
import { useTheme } from 'styled-components';

interface TabBarProps {}

const Tab = createBottomTabNavigator();

const TabBar: React.FunctionComponent<TabBarProps> = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="none"
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
};

export default TabBar;
