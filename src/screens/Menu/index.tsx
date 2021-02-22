import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SingleItem from '../../components/Menu/SingleItemCard';

import Menu from './MenuList';

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Menu} name="MenuList" />
      <Stack.Screen component={SingleItem} name="SingleItem" />
    </Stack.Navigator>
  );
};

export default MenuNav;
