import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinksContainer } from "./styles";
import ListItem from "../ListItem";
import accountTranslations from "../../../translations/account";

interface ProfileLinkProps {}

const ProfileLink: React.FunctionComponent<ProfileLinkProps> = () => {
  return (
    <LinksContainer>
      <ListItem
        icon={<AntDesign name="calendar" size={28} color="#000000" />}
        icon2={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        }
        title={accountTranslations.accountPage.myReservation}
        navigateTo="Reservations"
      />
      <ListItem
        icon={
          <MaterialCommunityIcons
            name="glass-cocktail"
            size={28}
            color="#000000"
          />
        }
        icon2={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        }
        title={accountTranslations.accountPage.myFavouriteCoctails}
        navigateTo="FavouriteCocktails"
      />

      <ListItem
        icon={<AntDesign name="shoppingcart" size={28} color="#000000" />}
        icon2={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        }
        title={accountTranslations.accountPage.myOrders}
        navigateTo="Orders"
      />

      <ListItem
        icon={<Icon name="notifications-outline" size={28} color="#000000" />}
        icon2={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        }
        title={accountTranslations.accountPage.notifications}
        navigateTo="Notifications"
      />
      <ListItem
        icon={<Icon name="settings-outline" size={28} color="#000000" />}
        icon2={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        }
        title={accountTranslations.accountPage.settings}
        navigateTo="Settings"
      />
    </LinksContainer>
  );
};

export default ProfileLink;
