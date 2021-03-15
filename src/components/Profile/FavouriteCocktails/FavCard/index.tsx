import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { Container, DrinkImage, DrinkDesc, IconWrap, FavouriteCoctailsCard, ImageContainer } from './styles';

interface FavCardProps {
  item: MenuItem;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({ item }) => {
  const theme = useTheme();

  const navigation = useNavigation();

  const onCardClick = () => {
    navigation.navigate('Menu', { screen: 'SingleItem', params: { item }, initial: false });
  };

  return (
    <FavouriteCoctailsCard>
      <Container onPress={onCardClick}>
        <ImageContainer>
          <DrinkImage source={{ uri: item.image }} />
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
          <Icon color={theme.colors.activeRed} name="ios-heart" size={25} />
        </IconWrap>
      </Container>
    </FavouriteCoctailsCard>
  );
};

export default FavCard;
