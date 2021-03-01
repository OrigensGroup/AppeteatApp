import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from 'styled-components';


import {
  CardContainer,
  VenueImage,
  DrinkDesc,
  ImageContainer,
  ButtonContainer,
  LocationButton,
  Content,
  LocationButton2,
  Circle,
  TextContainer
} from './styles';
import theme from '../../../theme';
import Text from '../../Shared/Text';
import { Venue } from '../../../types/Venue';

interface LocationCardProps {
  venue: Venue;
  onClick: (venue: Venue) => () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({ onClick, venue }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('Book');
  };

  return (
    <CardContainer activeOpacity={0.9} onPress={onClick(venue)}>
      <ImageContainer>
        <VenueImage source={{ uri: venue.image }} />
      </ImageContainer>
      <Content>
        <Circle />
        <DrinkDesc>
          <Text fontSize={16} color="primary" bold>
            {venue.name}
          </Text>
          <TextContainer><Text fontSize={12} color="primary">{venue.address}
          </Text></TextContainer>
            
          <Text fontSize={12} color="quartiary">
            {venue.phoneNumber}
          </Text>
        </DrinkDesc>
      </Content>
      <ButtonContainer>
        <LocationButton>
          <Icon color={theme.colors.textPrimary} name="share" size={28} />
        </LocationButton>
        <LocationButton2 onPress={onClick(venue)}>
          <Text fontSize={12} color="tertiary" bold>
            BOOK A TABLE
          </Text>
        </LocationButton2>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
