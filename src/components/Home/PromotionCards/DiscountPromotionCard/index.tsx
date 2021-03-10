import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Text from '../../../shared/Text';

import homeTranslations from '../../../../translations/home';

import {
  DiscountPromotionContainer,
  DiscountPromotionImage,
  DiscountPromotionDescription,
  DiscountPromotionButton,
  ImageContainer,
  DiscountPromotionOrderButton,
} from './styles';

type DiscountCardItem = {
  title: string;
  description: string;
  image: string;
};

interface DiscountPromotionCardProps {
  item: DiscountCardItem;
}

//MAX DESCRIPTION 163 chars

const DiscountPromotionCard: React.FunctionComponent<DiscountPromotionCardProps> = ({ item }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('Menu');
  };

  return (
    <DiscountPromotionContainer onPress={navigate}>
      <ImageContainer>
        <DiscountPromotionImage source={{ uri: item.image }} />
      </ImageContainer>
      <DiscountPromotionDescription>
        <Text bold color="primary" fontSize={20}>
          {item.title}
        </Text>
        <Text color="primary" fontSize={16} light>
          {item.description}
        </Text>
      </DiscountPromotionDescription>
      <DiscountPromotionButton>
        <DiscountPromotionOrderButton>
          <Text color="fixedWhite" fontSize={14}>
            {homeTranslations.discountPromotionCard.cta}
          </Text>
        </DiscountPromotionOrderButton>
      </DiscountPromotionButton>
    </DiscountPromotionContainer>
  );
};

export default DiscountPromotionCard;
