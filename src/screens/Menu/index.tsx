import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './MenuList';
import SingleItem from './SingleItem';
import Cart from '../Cart';

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MenuList">
      <Stack.Screen component={Menu} name="MenuList" />
      <Stack.Screen component={SingleItem} name="SingleItem" />
      <Stack.Screen component={Cart} name="Cart" />
    </Stack.Navigator>
  );
};

export default MenuNav;
