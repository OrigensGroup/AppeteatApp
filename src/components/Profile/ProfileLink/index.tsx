import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from 'styled-components';

import ListItem from '../ListItem';
import accountTranslations from '../../../translations/profile';

import withFeatureFlag from '../../../HOC/withFeatureFlag';

import { LinksContainer } from './styles';

interface ProfileLinkProps {}

const BookingItem = withFeatureFlag(ListItem, 'FEAT_BOOK');

const ProfileLink: React.FunctionComponent<ProfileLinkProps> = () => {
  const theme = useTheme();
  return (
    <LinksContainer>
      <BookingItem
        icon={<AntDesign color={theme.colors.textPrimary} name="calendar" size={28} />}
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Reservations"
        title={accountTranslations.accountPage.myReservation}
      />
      <ListItem
        icon={<MaterialCommunityIcons color={theme.colors.textPrimary} name="glass-cocktail" size={28} />}
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="FavouriteCocktails"
        title={accountTranslations.accountPage.myFavouriteCoctails}
      />

      <ListItem
        icon={<AntDesign color={theme.colors.textPrimary} name="shoppingcart" size={28} />}
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Orders"
        title={accountTranslations.accountPage.myOrders}
      />
      <ListItem
        icon={<Icon color={theme.colors.textPrimary} name="settings-outline" size={28} />}
        icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
        navigateTo="Settings"
        title={accountTranslations.accountPage.settings}
      />
    </LinksContainer>
  );
};

export default ProfileLink;
