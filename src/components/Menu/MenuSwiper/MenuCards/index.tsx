import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyTranslations from '../../../../translations/currency'
import Text from '../../../Shared/Text'

import { MenuItem } from '../../../../types/MenuItem';

import {
  CardContainer,
  ImageWrapper,
  LeftWrapper,
  RightWrapper,
  DrinkImage,
  DrinkDesc,
  LikeButton,

} from './styles';

interface CardProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('SingleItem', { item });
  };

  return (
    <CardContainer onPress={navigate}>
      <LeftWrapper>
        <ImageWrapper>
          <DrinkImage source={{ uri: item.image }} />
        </ImageWrapper>
        <DrinkDesc>
          <Text color='primary' fontSize={18} bold>{item.title}</Text>
          <Text color='tertiary' fontSize={14}>{item.smallDesc}</Text>
          <Text color='quartiary' fontSize={18} bold>{currencyTranslations.currencyField.placeholder} {item.price}</Text>
        </DrinkDesc>
      </LeftWrapper>
      <RightWrapper>
        <LikeButton onPress={onClick}>
          <Icon color="#0000000" name="heart-outline" size={20} />
        </LikeButton>
      </RightWrapper>
    </CardContainer>
  );
};

export default MenuCard;
