import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { MenuItem } from '../../../types/MenuItem';
import Text from '../../shared/Text';
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
          <Text fontSize={18} color="primary">
            {item.title}
          </Text>
          <Text fontSize={14} color="quartiary">
            Rum, Juice, Beown sugar
          </Text>
        </DrinkDesc>
        <IconWrap>
          <Entypo name="heart" size={25} color="red" />
        </IconWrap>
      </Container>
    </FavouriteCoctailsCard>
  );
};

export default FavCard;
