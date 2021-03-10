import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import Account from './Account';
import Reservations from './Reservations';
import FavouriteCocktails from './FavouriteCocktails';
import Orders from './Orders';
import Notifications from './Notifications';
import Settings from './Settings';
import PersonalInformation from './Settings/PersonalInformation';
import Password from './Settings/Password';
import ChangeEmail from './Settings/PersonalInformation/ChangeEmail';
import ChangeName from './Settings/PersonalInformation/ChangeName';

const Stack = createStackNavigator();

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
  const theme = useTheme();
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
          title: 'My Reservation',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={FavouriteCocktails}
        name="FavouriteCocktails"
        options={{
          title: 'My Favourite Cocktails',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={Orders}
        name="Orders"
        options={{
          title: 'My Orders',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={Notifications}
        name="Notifications"
        options={{
          title: 'Notifications',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={Settings}
        name="Settings"
        options={{
          title: 'Settings',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={PersonalInformation}
        name="PersonalInformation"
        options={{
          title: 'Personal Information',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={Password}
        name="Password"
        options={{
          title: 'Password',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={ChangeName}
        name="ChangeName"
        options={{
          title: 'Change Name',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
      <Stack.Screen
        component={ChangeEmail}
        name="ChangeEmail"
        options={{
          title: 'Change Email',
          headerTintColor: theme.colors.textPrimary,
          headerStyle: {
            backgroundColor: theme.colors.backgroundColor,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Profile;
