import React, { useState } from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  CardContainer,
  DrinkImage,
  DrinkDesc,
  DrinkLike,
  TextTitle,
} from "./styles";

interface CardProps {}

const Card: React.FunctionComponent<CardProps> = ({}) => {
  return (
    <CardContainer>
      <DrinkImage source={require("../../../img/mojito.jpg")}></DrinkImage>
      <DrinkDesc>
        <TextTitle>Mojito</TextTitle>
        <Text>Long Drink</Text>
      </DrinkDesc>
      <DrinkLike>
        <Icon name="heart-outline" size={28} color="#0008" />
        {/* <Icon name="heart" size={30} color="red" /> */}
      </DrinkLike>
    </CardContainer>
  );
};

export default Card;
