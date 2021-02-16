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

interface ProfileLinkProps {}

const ProfileLink: React.FunctionComponent<ProfileLinkProps> = ({}) => {
  return (
    <LinkWrapper>
      <ProfileLinkContainer>
        <IconContainer>
          <AntDesign name="calendar" size={28} color="#000000" />
        </IconContainer>
        <IconTextWrap>
          <Text>My Reservation</Text>
        </IconTextWrap>
        <ArrowContainer>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        </ArrowContainer>
      </ProfileLinkContainer>
      <ProfileLinkContainer>
        <IconContainer>
          <MaterialCommunityIcons
            name="glass-cocktail"
            size={28}
            color="#000000"
          />
        </IconContainer>
        <IconTextWrap>
          <Text>My Favourite Cocktails</Text>
        </IconTextWrap>
        <ArrowContainer>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        </ArrowContainer>
      </ProfileLinkContainer>
      <ProfileLinkContainer>
        <IconContainer>
          <AntDesign name="shoppingcart" size={28} color="#000000" />
        </IconContainer>
        <IconTextWrap>
          <Text>My Orders</Text>
        </IconTextWrap>

        <MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />
      </ProfileLinkContainer>
      <ProfileLinkContainer>
        <IconContainer>
          <Icon name="notifications-outline" size={28} color="#000000" />
        </IconContainer>
        <IconTextWrap>
          <Text>Notifications</Text>
        </IconTextWrap>
        <ArrowContainer>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        </ArrowContainer>
      </ProfileLinkContainer>
      <ProfileLinkContainer>
        <IconContainer>
          <Icon name="settings-outline" size={28} color="#000000" />
        </IconContainer>
        <IconTextWrap>
          <Text>Settings</Text>
        </IconTextWrap>
        <ArrowContainer>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={28}
            color="#818181"
          />
        </ArrowContainer>
      </ProfileLinkContainer>
    </LinkWrapper>
  );
};

export default ProfileLink;
