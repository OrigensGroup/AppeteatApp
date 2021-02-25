import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HappyHourMenu from './HappyHourMenu';
import Home from './HomePage';

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Home} name="HomePage" />
      <Stack.Screen component={HappyHourMenu} name="HappyHourMenu" />
    </Stack.Navigator>
  );
};

export default MenuNav;
