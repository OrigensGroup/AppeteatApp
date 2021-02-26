import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Text from '../../Shared/Text';
import { CardContainer, DrinkImage, DrinkDesc, IconWrap, CardWrap, ImageContainer } from './styles';

interface FavCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({ title, description, onClick }) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <ImageContainer>
          <DrinkImage source={require('../../../img/venue.jpg')} />
        </ImageContainer>
        <DrinkDesc>
          <Text fontSize={18} color="primary">
            {title}
          </Text>
          <Text fontSize={14} color="tertiary">
            {description}
          </Text>
          <IconWrap>
            <Entypo name="heart" size={25} color="red" />
          </IconWrap>
        </DrinkDesc>
      </CardContainer>
    </CardWrap>
  );
};

export default FavCard;
