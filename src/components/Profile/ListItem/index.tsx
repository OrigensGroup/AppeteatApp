import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
  icon: React.ReactElement;
  navigateTo: string;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({
  icon,
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
        <Title color="#000" fontSize={14}>
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
