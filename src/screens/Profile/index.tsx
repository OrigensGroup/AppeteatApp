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
        name="Account"
        options={{
          headerShown: false,
        }}
        component={Account}
      />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="FavouriteCocktails" component={FavouriteCocktails} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="ChangeName" component={ChangeName} />
    </Stack.Navigator>
  );
};

export default Profile;
