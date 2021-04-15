import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { normalisedSource } from '../../../../utils/image';

import { CardContainer, DrinkDesc, Container, DescriptionWrapper, ImageContainer } from './styles';

interface CardProps {
  item: MenuItem;
}

const Card: React.FunctionComponent<CardProps> = ({ item }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const profileFavCard = 'Account';

  const onCardClick = () => {
    navigation.navigate('Menu', { screen: 'SingleItem', params: { item, profileFavCard }, initial: false });
  };

  return (
    <CardContainer>
      <Container onPress={onCardClick}>
        <ImageContainer>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={normalisedSource(item.image)}
            style={{
              width: Number(theme.spacing.multiple(11).replace('px', '')),
              height: '100%',
              borderRadius: Number(theme.spacing.double.replace('px', '')),
            }}
          />
        </ImageContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={14}>
            {item.title}
          </Text>
          <DescriptionWrapper>
            <Text color="primary" fontSize={12}>
              {item.description}
            </Text>
          </DescriptionWrapper>
        </DrinkDesc>
      </Container>
    </CardContainer>
  );
};

export default Card;
