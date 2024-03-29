import React from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { normalisedSource } from '../../../../utils/image';

import { Container, DrinkDesc, IconWrap, FavouriteCoctailsCard, ImageContainer } from './styles';

interface FavCardProps {
  item: MenuItem;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({ item }) => {
  const theme = useTheme();
  const goBackTo = 'FavouriteCocktails';
  const navigation = useNavigation();

  const onCardClick = () => {
    navigation.navigate('Menu', {
      screen: 'SingleItem',
      params: { item, goBackTo },
      initial: false,
    });
  };

  return (
    <FavouriteCoctailsCard>
      <Container onPress={onCardClick}>
        <ImageContainer>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={normalisedSource(item.image)}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: Number(theme.spacing.triple.replace('px', '')),
            }}
          />
        </ImageContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={14}>
            {item.title}
          </Text>
          <Text color="quartiary" fontSize={12}>
            {item.description}
          </Text>
        </DrinkDesc>
        <IconWrap>
          <Icon color={theme.colors.actionRed} name="ios-heart" size={25} />
        </IconWrap>
      </Container>
    </FavouriteCoctailsCard>
  );
};

export default FavCard;
