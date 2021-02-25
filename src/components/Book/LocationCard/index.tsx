import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

import {
  CardContainer,
  VenueImage,
  DrinkDesc,
  TextTitle,
  ImageContainer,
  Triangle,
  ButtonContainer,
  LocationButton,
} from './styles';

interface LocationCardProps {
  imageUrl: string;
  title: string;
  address: string;
  phoneNumber: string;
  onClick?: () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({ address, onClick, phoneNumber, title }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('BookTable', { title });
  };

  return (
    <CardContainer activeOpacity={0.9} onPress={onClick}>
      <ImageContainer>
        <VenueImage source={require('../../../img/venue.jpg')} />
        <Triangle />
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
        <LocationButton onPress={navigate}>
          <Text>Book a Table</Text>
        </LocationButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
