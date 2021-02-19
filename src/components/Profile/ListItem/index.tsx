import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Title from "../../Shared/Text";

import {
  ProfileLinkContainer,
  IconContainer,
  IconTextWrap,
  ArrowContainer,
} from "./styles";

interface ListItemProps {
  title: string;
  icon: React.ReactElement;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ icon, title }) => {
  return (
    <ProfileLinkContainer>
      <IconContainer>{icon}</IconContainer>
      <IconTextWrap>
        <Title color="#000" fontSize={14}>
          {title}
        </Title>
      </IconTextWrap>
      <ArrowContainer>
        <MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />
      </ArrowContainer>
    </ProfileLinkContainer>
  );
};

export default ListItem;
