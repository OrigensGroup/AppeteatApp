import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from 'styled-components';

import FastImage from 'react-native-fast-image';

import Text from '../../shared/Text';
import { Venue } from '../../../types/Venue';
import bookTranslations from '../../../translations/book';

import {
  CardContainer,
  DrinkDesc,
  ImageContainer,
  ButtonContainer,
  ShareButton,
  Content,
  BookATableButton,
  Circle,
  TextContainer,
} from './styles';

interface LocationCardProps {
  venue: Venue;
  onClick: (venue: Venue) => () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({ onClick, venue }) => {
  const theme = useTheme();

  return (
    <CardContainer activeOpacity={0.9} onPress={onClick(venue)}>
      <ImageContainer>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: venue.image,
            priority: FastImage.priority.high,
          }}
          style={{
            width: '100%',
            height: '100%',
            borderTopRightRadius: Number(theme.spacing.double.replace('px', '')),
            borderTopLeftRadius: Number(theme.spacing.double.replace('px', '')),
          }}
        />
      </ImageContainer>
      <Content>
        <Circle />
        <DrinkDesc>
          <Text bold color="primary" fontSize={16}>
            {venue.name}
          </Text>
          <TextContainer>
            <Text color="primary" fontSize={12}>
              {venue.address}
            </Text>
          </TextContainer>
          <Text color="quartiary" fontSize={12}>
            {venue.phoneNumber}
          </Text>
        </DrinkDesc>
      </Content>
      <ButtonContainer>
        <ShareButton>
          <Icon color={theme.colors.textPrimary} name="share" size={28} />
        </ShareButton>
        <BookATableButton onPress={onClick(venue)}>
          <Text bold color="tertiary" fontSize={12}>
            {bookTranslations.bookPage.bookTableButton}
          </Text>
        </BookATableButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
