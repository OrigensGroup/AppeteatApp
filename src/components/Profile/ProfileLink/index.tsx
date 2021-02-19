import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListItem from '../ListItem';

import { LinkWrapper } from './styles';

interface ProfileLinkProps {}

const ProfileLink: React.FunctionComponent<ProfileLinkProps> = () => {
  return (
    <LinkWrapper>
      <ListItem
        icon={<AntDesign color='#000000' name='calendar' size={28} />}
        title='My Reservation'
      />
      <ListItem
        icon={
          <MaterialCommunityIcons
            color='#000000'
            name='glass-cocktail'
            size={28}
          />
        }
        title='My Favourite Cocktails'
      />

      <ListItem
        icon={<AntDesign color='#000000' name='shoppingcart' size={28} />}
        title='My Orders'
      />

      <ListItem
        icon={<Icon color='#000000' name='notifications-outline' size={28} />}
        title='Notification'
      />
      <ListItem
        icon={<Icon color='#000000' name='settings-outline' size={28} />}
        title='Settings'
      />
    </LinkWrapper>
  );
};

export default ProfileLink;
