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
  imageUrl: string;
  title: string;
  address: string;
  phoneNumber: string;
  onClick?: () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({
  imageUrl,
  title,
  address,
  phoneNumber,
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
        <Text>{address}</Text>
        <Text>{phoneNumber}</Text>
      </DrinkDesc>
    </CardContainer>
  );
};

export default LocationCard;
