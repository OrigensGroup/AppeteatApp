import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ListItem from '../../../components/Profile/ListItem';
import auth from '@react-native-firebase/auth';

import { SettingsContainer } from './styles';
import { Alert } from 'react-native';
import accountTranslations from '../../../translations/account';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {

  const logOutAlert= () => Alert.alert(
      accountTranslations.accountPage.logOut,
      accountTranslations.accountPage.logOutPromp,
      [
        {
          text: accountTranslations.accountPage.logOut,
          style: "cancel"
        },
        { text: accountTranslations.accountPage.yes, onPress: () => auth().signOut()}
      ],
      { cancelable: false }
    );
  return (
    <SettingsContainer>
        <ListItem
          title={accountTranslations.accountPage.personalInformation}
          navigateTo="PersonalInformation"
          icon2={<MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />}
        />
        <ListItem
          title={accountTranslations.accountPage.myCard}
          navigateTo="Notifications"
          icon2={<MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />}
        />
        <ListItem
          title={accountTranslations.accountPage.password}
          navigateTo="Password"
          icon2={<MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />}
        />
        <ListItem
          title={accountTranslations.accountPage.logOut}
          onClick={logOutAlert}
          icon2={<MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />}
        />
    </SettingsContainer>
  );
};

export default Settings;
