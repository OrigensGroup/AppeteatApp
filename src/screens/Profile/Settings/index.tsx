import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ListItem from '../../../components/Profile/ListItem';

import { SettingsContainer, SettingsWrap } from './styles';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  return (
    <SettingsContainer>
      <SettingsWrap>
        <ListItem
          title="Personal Information"
          navigateTo="PersonalInformation"
          icon2={
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="#818181"
            />
          }
        />
        <ListItem
          title="My Cards"
          navigateTo="Notifications"
          icon2={
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="#818181"
            />
          }
        />
        <ListItem
          title="Password"
          navigateTo="Password"
          icon2={
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="#818181"
            />
          }
        />
      </SettingsWrap>
    </SettingsContainer>
  );
};

export default Settings;
