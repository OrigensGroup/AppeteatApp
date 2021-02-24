import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HappyHourMenu from '../Menu/HappyHourMenu';
import Home from './HomePage';

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="HappyHourMenu" component={HappyHourMenu} />
    </Stack.Navigator>
  );
};

export default MenuNav;
