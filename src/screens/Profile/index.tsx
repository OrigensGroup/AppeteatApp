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
import Text from '../../components/Shared/Text';
import { ButtonContainer } from '../../screens/Profile/Settings/PersonalInformation/styles';
import accountTranslations from '../../translations/account';
import { Alert } from 'react-native';
import CustomButton from '../../components/Shared/Button';

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
      <Stack.Screen component={Reservations} name="Reservations" options={{ title: 'My Reservation' }} />
      <Stack.Screen component={FavouriteCocktails} name="FavouriteCocktails"  options={{ title: 'My Favourite Cocktails' }}/>
      <Stack.Screen component={Orders} name="Orders" options={{ title: 'My Orders' }} />
      <Stack.Screen component={Notifications} name="Notifications" options={{ title: 'Notifications' }} />
      <Stack.Screen component={Settings} name="Settings" options={{ title: 'Settings' }} />
      <Stack.Screen component={PersonalInformation} name="PersonalInformation"  options={{ title: 'Personal Information' }}/>
      <Stack.Screen component={Password} name="Password"  />
      <Stack.Screen component={ChangeName} name="ChangeName" />
      <Stack.Screen component={ChangeEmail} name="ChangeEmail" />
    </Stack.Navigator>
  );
};

export default Profile;
