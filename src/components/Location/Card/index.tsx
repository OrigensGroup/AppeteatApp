import React from "react";
import { Text } from "react-native";
import {
  CardContainer,
  VenueImage,
  DrinkDesc,
  TextTitle,
  ImageContainer,
  Triangle,
} from "./styles";

interface LocationCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <CardContainer onPress={onClick}>
      <ImageContainer>
        <VenueImage source={require("../../../img/mojito.jpg")} />
        <Triangle></Triangle>
      </ImageContainer>
      <DrinkDesc>
        <TextTitle>{title}</TextTitle>
        <Text>{description}</Text>
      </DrinkDesc>
    </CardContainer>
  );
};

export default LocationCard;
