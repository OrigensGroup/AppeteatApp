import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { MenuItem } from '../../../types/MenuItem';
import Text from '../../Shared/Text';
import { CardContainer, DrinkImage, DrinkDesc, IconWrap, CardWrap, ImageContainer } from './styles';

interface FavCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({
  item,

  onClick,
}) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <ImageContainer><DrinkImage source={{ uri: item.image }} /></ImageContainer>
        <DrinkDesc>
          <Text fontSize={18} color='#000'>{item.title}</Text>
          <Text fontSize={14} color='#c2c2c2'>Rum, Lime Juice, Beown sugar</Text>
        </DrinkDesc>
        <IconWrap>
            <Entypo name="heart" size={25}
            color="red"/>
          </IconWrap>
      </CardContainer>
    </CardWrap>
  );
};

export default FavCard;
