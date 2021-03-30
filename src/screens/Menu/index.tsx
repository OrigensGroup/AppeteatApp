import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../Cart';

import SingleItem from './SingleItem';
import Menu from './MenuList';

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator initialRouteName="MenuList">
      <Stack.Screen
        component={Menu}
        name="MenuList"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SingleItem}
        name="SingleItem"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Cart}
        name="Cart"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuNav;
