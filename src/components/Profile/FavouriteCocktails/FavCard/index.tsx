import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { Container, DrinkImage, DrinkDesc, IconWrap, FavouriteCoctailsCard, ImageContainer } from './styles';

interface FavCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({ item, onClick }) => {
  return (
    <FavouriteCoctailsCard>
      <Container onPress={onClick}>
        <ImageContainer>
          <DrinkImage source={{ uri: item.image }} />
        </ImageContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={14} >
            {item.title}
          </Text>
          <Text color="quartiary" fontSize={12}>
            Sesso, Droga e Pastorizia
          </Text>
        </DrinkDesc>
        <IconWrap>
          <Entypo color="red" name="heart" size={25} />
        </IconWrap>
      </Container>
    </FavouriteCoctailsCard>
  );
};

export default FavCard;
