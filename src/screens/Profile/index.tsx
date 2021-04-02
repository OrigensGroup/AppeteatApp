import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from './Account';
import Reservations from './Reservations';
import FavouriteCocktails from './FavouriteCocktails';
import Orders from './Orders';
import Settings from './Settings';
import Password from './Settings/Password';

const Stack = createStackNavigator();

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Account}
        name="Account"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Reservations}
        name="Reservations"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={FavouriteCocktails}
        name="FavouriteCocktails"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Orders}
        name="Orders"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Settings}
        name="Settings"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Password}
        name="Password"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Profile;
