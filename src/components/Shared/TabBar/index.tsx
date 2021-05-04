import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from 'styled-components';

import Home from '../../../screens/Home';
import Menu from '../../../screens/Menu';
import Book from '../../../screens/Book';
import Profile from '../../../screens/Profile';
import sharedTranslations from '../../../translations/shared';

interface TabBarProps {}

const Tab = createBottomTabNavigator();

const TabBar: React.FunctionComponent<TabBarProps> = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.active,
        inactiveTintColor: theme.colors.border,
        activeBackgroundColor: theme.colors.backgroundColor,
        inactiveBackgroundColor: theme.colors.backgroundColor,
        style: {
          backgroundColor: theme.colors.backgroundColor,
        },
        labelStyle: { fontSize: 10, marginBottom: 6 },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabel: sharedTranslations.tabs.home,
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="md-home-outline" size={size} />,
        }}
      />
      <Tab.Screen
        component={Menu}
        name="Menu"
        options={{
          tabBarVisible: false,
          tabBarLabel: sharedTranslations.tabs.menu,
          tabBarIcon: ({ color, size }) => <Ionicons color={color} name="restaurant-outline" size={size} />,
        }}
      />
      <Tab.Screen
        component={Book}
        name="Book"
        options={{
          tabBarLabel: sharedTranslations.tabs.book,
          tabBarIcon: ({ color, size }) => <Antdesign color={color} name="calendar" size={size} />,
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Account"
        options={{
          tabBarLabel: sharedTranslations.tabs.account,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} name="account-outline" size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
