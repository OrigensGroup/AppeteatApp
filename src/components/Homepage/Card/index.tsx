import React, { useState } from "react";
import { Text } from "react-native";
import { CardContainer, DrinkImage, DrinkDesc, DrinkLike } from "./styles";

interface CardProps {}

const Card: React.FunctionComponent<CardProps> = ({}) => {
  return (
    <CardContainer>
      <DrinkImage source={require("../../../img/mojito.jpg")}></DrinkImage>
      <DrinkDesc>
        <Text style={{ fontSize: 20 }}>Mojito</Text>
        <Text>Long Drink</Text>
      </DrinkDesc>
      <DrinkLike></DrinkLike>
    </CardContainer>
  );
};

export default Card;
