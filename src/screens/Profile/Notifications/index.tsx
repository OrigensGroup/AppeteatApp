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
          icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
          navigateTo="Notifications"
          title="Menu Promotions"
        />
        <ListItem
          icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
          navigateTo="Notifications"
          title="Event Promotions"
        />
        <ListItem
          icon2={
            <Switch
              checked={state.checkedB}
              color="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
              name="checkedB"
              onChange={handleChange}
            />
          }
          navigateTo="Notifications"
          title="Pause All"
        />
      </NotificationsWrap>
    </NotificationsContainer>
  );
};

export default Notifications;
