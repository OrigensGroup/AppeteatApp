import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SingleItem from '../../components/Menu/SingleItemCard';
import HappyHourMenu from '../Menu/HappyHourMenu';
import Menu from '../Menu/MenuList';

import Home from './HomePage';

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Home} name="HomePage" />
      <Stack.Screen component={Menu} name="MenuList" />
      <Stack.Screen component={HappyHourMenu} name="HappyHourMenu" />
      <Stack.Screen component={SingleItem} name="SingleItem" />
    </Stack.Navigator>
  );
};

export default MenuNav;
