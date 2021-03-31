import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import accountTranslations from '../../translations/profile';

import Account from './Account';
import Reservations from './Reservations';
import FavouriteCocktails from './FavouriteCocktails';
import Orders from './Orders';
import Settings from './Settings';
import Password from './Settings/Password';

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
          title: accountTranslations.accountPage.myReservation,
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
          title: accountTranslations.accountPage.myFavouriteCoctails,
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
          title: accountTranslations.accountPage.myOrders,
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
          title: accountTranslations.accountPage.settings,
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
          title: accountTranslations.passwordPage.changePassword,
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
