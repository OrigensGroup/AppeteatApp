import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  ProfileLinkContainer,
  IconTextWrap,
  LinkWrapper,
  ArrowContainer,
  IconContainer,
} from "./styles";
import ListItem from "../ListItem";

interface ProfileLinkProps {}

const ProfileLink: React.FunctionComponent<ProfileLinkProps> = ({}) => {
  return (
    <LinkWrapper>
      <ListItem
        icon={<AntDesign name="calendar" size={28} color="#000000" />}
        title="My Reservation"
      />
      <ListItem
        icon={
          <MaterialCommunityIcons
            name="glass-cocktail"
            size={28}
            color="#000000"
          />
        }
        title="My Favourite Cocktails"
      />

      <ListItem
        icon={<AntDesign name="shoppingcart" size={28} color="#000000" />}
        title="My Orders"
      />

      <ListItem
        icon={<Icon name="notifications-outline" size={28} color="#000000" />}
        title="Notification"
      />
      <ListItem
        icon={<Icon name="settings-outline" size={28} color="#000000" />}
        title="Settings"
      />
    </LinkWrapper>
  );
};

export default ProfileLink;
