import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LocationsList from '../Book/LocationsList';
import HappyHourMenu from '../Menu/HappyHourMenu';
import Home from './HomePage';

const Stack = createStackNavigator();

interface HomeNavProps {}

const HomeNav: React.FunctionComponent<HomeNavProps> = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="HappyHourMenu" component={HappyHourMenu} />
      <Stack.Screen name="LocationsList" component={LocationsList} />
    </Stack.Navigator>
  );
};

export default HomeNav;
