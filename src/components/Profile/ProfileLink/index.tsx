import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinkWrapper } from "./styles";
import ListItem from "../ListItem";

interface ProfileLinkProps {}

const ProfileLink: React.FunctionComponent<ProfileLinkProps> = () => {
  return (
    <LinkWrapper>
      <ListItem
        icon={<AntDesign name="calendar" size={28} color="#000000" />}
        icon2={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        }
        title="My Reservation"
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
        title="My Favourite Cocktails"
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
        title="My Orders"
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
        title="Notification"
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
        title="Settings"
        navigateTo="Settings"
      />
    </LinkWrapper>
  );
};

export default ProfileLink;
