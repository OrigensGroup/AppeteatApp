import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import accountTranslations from '../../translations/account';

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
        options={{ title: accountTranslations.accountPage.myReservation }}
      />
      <Stack.Screen
        component={FavouriteCocktails}
        name="FavouriteCocktails"
        options={{ title: accountTranslations.accountPage.myFavouriteCoctails }}
      />
      <Stack.Screen component={Orders} name="Orders" options={{ title: accountTranslations.accountPage.myOrders }} />
      <Stack.Screen
        component={Notifications}
        name="Notifications"
        options={{ title: accountTranslations.accountPage.notifications }}
      />
      <Stack.Screen
        component={Settings}
        name="Settings"
        options={{ title: accountTranslations.accountPage.settings }}
      />
      <Stack.Screen
        component={PersonalInformation}
        name="PersonalInformation"
        options={{ title: accountTranslations.accountPage.personalInformation }}
      />
      <Stack.Screen component={Password} name="Password" />
      <Stack.Screen component={ChangeName} name="ChangeName" />
      <Stack.Screen component={ChangeEmail} name="ChangeEmail" />
    </Stack.Navigator>
  );
};

export default Profile;
