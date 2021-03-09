import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ListItem from '../../../components/Profile/ListItem';

import { SettingsContainer } from './styles';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  return (
    <SettingsContainer>
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="PersonalInformation"
        title="Personal Information"
      />
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Notifications"
        title="My Cards"
      />
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Password"
        title="Password"
      />
    </SettingsContainer>
  );
};

export default Settings;
