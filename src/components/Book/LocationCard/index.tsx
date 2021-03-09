import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from 'styled-components';

import {
  CardContainer,
  VenueImage,
  DrinkDesc,
  ImageContainer,
  ButtonContainer,
  ShareButton,
  Content,
  BookATableButton,
  Circle,
  TextContainer,
} from './styles';

import Text from '../../shared/Text';
import { Venue } from '../../../types/Venue';
import bookTranslations from '../../../translations/book';

interface LocationCardProps {
  venue: Venue;
  onClick: (venue: Venue) => () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({ onClick, venue }) => {
  const theme = useTheme();

  return (
    <CardContainer activeOpacity={0.9} onPress={onClick(venue)}>
      <ImageContainer>
        <VenueImage source={{ uri: venue.image }} resizeMode="cover" />
      </ImageContainer>
      <Content>
        <Circle />
        <DrinkDesc>
          <Text fontSize={16} color="primary" bold>
            {venue.name}
          </Text>
          <TextContainer>
            <Text fontSize={12} color="primary">
              {venue.address}
            </Text>
          </TextContainer>
          <Text fontSize={12} color="quartiary">
            {venue.phoneNumber}
          </Text>
        </DrinkDesc>
      </Content>
      <ButtonContainer>
        <ShareButton>
          <Icon color={theme.colors.textPrimary} name="share" size={28} />
        </ShareButton>
        <BookATableButton onPress={onClick(venue)}>
          <Text fontSize={12} color="tertiary" bold>
            {bookTranslations.bookPage.bookTableButton}
          </Text>
        </BookATableButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
