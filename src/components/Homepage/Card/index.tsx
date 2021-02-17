import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  CardContainer,
  DrinkImage,
  DrinkDesc,
  DrinkLike,
  TextTitle,
  CardWrap,
} from "./styles";

interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <DrinkImage source={require("../../../img/mojito.jpg")} />
        <DrinkDesc>
          <TextTitle>{title}</TextTitle>
          <Text>{description}</Text>
        </DrinkDesc>
        <DrinkLike>
          <Icon name="heart-outline" size={28} color="#0008" />
          {/* <Icon name="heart" size={30} color="red" /> */}
        </DrinkLike>
      </CardContainer>
    </CardWrap>
  );
};

export default Card;
