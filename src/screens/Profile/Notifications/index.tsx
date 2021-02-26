import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Switch } from 'react-native-gesture-handler';

import ListItem from '../../../components/Profile/ListItem';

import { NotificationsContainer, NotificationsWrap } from './styles';

interface NotificationsProps {}

const Notifications: React.FunctionComponent<NotificationsProps> = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <NotificationsContainer>
      <NotificationsWrap>
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
              checked={state.checkedB}
              onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
        />
      </NotificationsWrap>
    </NotificationsContainer>
  );
};

export default Notifications;
