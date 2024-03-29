import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HappyHourMenu from './HappyHourMenu';
import Home from './HomePage';

const Stack = createStackNavigator();

interface HomeNavProps {}

const HomeNav: React.FunctionComponent<HomeNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Home} name="HomePage" />
      <Stack.Screen component={HappyHourMenu} name="HappyHourMenu" />
    </Stack.Navigator>
  );
};

export default HomeNav;
