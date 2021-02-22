import React from "react";

import {
  ProfileLinkContainer,
  IconContainer,
  IconTextWrap,
  ArrowContainer,
} from "./styles";
import Title from "../../Shared/Text";
import { useNavigation } from "@react-navigation/native";

interface ListItemProps {
  title: string;
  icon?: React.ReactElement;
  icon2: React.ReactElement;
  navigateTo: string;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({
  icon,
  icon2,
  title,
  navigateTo,
}) => {
  const navigation = useNavigation();
  const navigate = (goTo: string) => () => {
    navigation.navigate(goTo);
  };
  return (
    <ProfileLinkContainer onPress={navigate(navigateTo)}>
      <IconContainer>{icon}</IconContainer>
      <IconTextWrap>
        <Title color="#000" fontSize={15}>
          {title}
        </Title>
      </IconTextWrap>
      <ArrowContainer>{icon2}</ArrowContainer>
    </ProfileLinkContainer>
  );
};

export default ListItem;
