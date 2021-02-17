import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  ProfileLinkContainer,
  IconContainer,
  IconTextWrap,
  ArrowContainer,
} from "./styles";
import Title from "../../Shared/Text";

interface ListItemProps {
  title: string;
  icon: React.ReactElement;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ icon, title }) => {
  return (
    <ProfileLinkContainer>
      <IconContainer>{icon}</IconContainer>
      <IconTextWrap>
        <Title color="#000" fontSize={16}>
          {title}
        </Title>
      </IconTextWrap>
      <ArrowContainer>
        <MaterialIcons name="keyboard-arrow-right" size={28} color="#818181" />
      </ArrowContainer>
    </ProfileLinkContainer>
  );
};

export default ListItem;
