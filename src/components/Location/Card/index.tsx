import React from "react";
import { Alert, Text } from "react-native";
import {
  CardContainer,
  VenueImage,
  DrinkDesc,
  TextTitle,
  ImageContainer,
  Triangle,
  ButtonContainer,
  LocationButton,
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
    <CardContainer onPress={onClick} activeOpacity={0.9}>
      <ImageContainer>
        <VenueImage source={require("../../../img/mojito.jpg")} />
        <Triangle></Triangle>
      </ImageContainer>
      <DrinkDesc>
        <TextTitle>{title}</TextTitle>
        <Text>{address}</Text>
        <Text>{phoneNumber}</Text>
      </DrinkDesc>
      <ButtonContainer>
        <LocationButton>
          <Text>Open Maps</Text>
        </LocationButton>
        <LocationButton>
          <Text>Book a Table</Text>
        </LocationButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
