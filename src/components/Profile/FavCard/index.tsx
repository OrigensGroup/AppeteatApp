import React from "react";
import { Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Title from "../../Shared/Text";
import {
  CardContainer,
  DrinkImage,
  DrinkDesc,
  IconWrap,
  CardWrap,
  ImageContainer,
} from "./styles";

interface FavCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <ImageContainer><DrinkImage source={require("../../../img/mojito.jpg")} /></ImageContainer>
        <DrinkDesc>
          <Title fontSize={18} color='#000'>{title}</Title>
          <Title fontSize={14} color='#c2c2c2'>{description}</Title>
          <IconWrap>
            <Entypo name="heart" size={25}
            color="red"/>
          </IconWrap>
        </DrinkDesc>
      </CardContainer>
    </CardWrap>
  );
};

export default FavCard;
