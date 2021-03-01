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
          title="Menu Promotions"
          navigateTo="Notifications"
          icon2={<MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />}
        />
        <ListItem
          title="Event Promotions"
          navigateTo="Notifications"
          icon2={<MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />}
        />
        <ListItem
          title="Pause All"
          navigateTo="Notifications"
          icon2={
            <Switch
            />
          }
        />
    </NotificationsContainer>
  );
};

export default Notifications;
