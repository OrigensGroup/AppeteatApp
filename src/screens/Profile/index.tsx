import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
      <Stack.Screen component={Reservations} name="Reservations" />
      <Stack.Screen component={FavouriteCocktails} name="FavouriteCocktails" />
      <Stack.Screen component={Orders} name="Orders" />
      <Stack.Screen component={Notifications} name="Notifications" />
      <Stack.Screen component={Settings} name="Settings" />
      <Stack.Screen component={PersonalInformation} name="PersonalInformation" />
      <Stack.Screen component={Password} name="Password" />
      <Stack.Screen component={ChangeEmail} name="ChangeEmail" />
      <Stack.Screen component={ChangeName} name="ChangeName" />
    </Stack.Navigator>
  );
};

export default Profile;
