import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Switch } from 'react-native-gesture-handler';

import ListItem from '../../../components/Profile/ListItem';

import { NotificationsContainer } from './styles';

interface NotificationsProps {}

const Notifications: React.FunctionComponent<NotificationsProps> = () => {
  return (
    <NotificationsContainer>
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Notifications"
        title="Menu Promotions"
      />
      <ListItem
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Notifications"
        title="Event Promotions"
      />
      <ListItem icon2={<Switch />} navigateTo="Notifications" title="Pause All" />
    </NotificationsContainer>
  );
};

export default Notifications;
