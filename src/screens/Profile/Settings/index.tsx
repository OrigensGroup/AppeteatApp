import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import ListItem from '../../../components/Profile/ListItem';
import accountTranslations from '../../../translations/profile';

import useUserData from '../../../hooks/useUserData';

import { SettingsContainer } from './styles';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const { restoreDefault } = useUserData();

  const logOutAlert = () =>
    Alert.alert(
      accountTranslations.settingsPage.logOut,
      accountTranslations.settingsPage.logOutPromp,
      [
        {
          text: accountTranslations.settingsPage.cancel,
          style: 'cancel',
        },
        {
          text: accountTranslations.settingsPage.yes,
          onPress: async () => {
            await auth().signOut();
            restoreDefault();
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <SettingsContainer>
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="PersonalInformation"
        title={accountTranslations.personalInformationPage.title}
      />
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Notifications"
        title={accountTranslations.settingsPage.myCard}
      />
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Password"
        title={accountTranslations.settingsPage.password}
      />
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        onClick={logOutAlert}
        title={accountTranslations.settingsPage.logOut}
      />
    </SettingsContainer>
  );
};

export default Settings;
