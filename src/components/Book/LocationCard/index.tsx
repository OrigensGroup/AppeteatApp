import React from 'react';
import { Linking, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useTheme } from 'styled-components';

import FastImage from 'react-native-fast-image';

import withFeatureFlag from '../../../HOC/withFeatureFlag';

import Text from '../../shared/Text';
import type { Venue } from '../../../types/Venue';
import bookTranslations from '../../../translations/book';

import { normalisedSource } from '../../../utils/image';

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

const BookATableButtonWithFlag = withFeatureFlag(BookATableButton, 'FEAT_BOOK');

interface LocationCardProps {
  venue: Venue;
  onClick: (venue: Venue) => () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({ onClick, venue }) => {
  const theme = useTheme();

  const onShareClick = () => {
    const url = Platform.select({
      ios: `maps:${venue.latitude},${venue.longitude}`,
      android: `geo:${venue.latitude},${venue.longitude}`,
    });

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <CardContainer activeOpacity={0.9}>
      <ImageContainer>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={normalisedSource(venue.image)}
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
        <ShareButton onPress={onShareClick}>
          <Icon color={theme.colors.textPrimary} name="share" size={28} />
        </ShareButton>
        <BookATableButtonWithFlag onPress={onClick(venue)}>
          <Text bold color="tertiary" fontSize={12}>
            {bookTranslations.locationsListPage.bookATableModal.cta}
          </Text>
        </BookATableButtonWithFlag>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
