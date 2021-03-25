import React from 'react';

import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';

import Text from '../../../shared/Text';

import { PromotionDiscount } from '../../../../types/Promotion';

import { normalisedSource } from '../../../../utils/image';

import {
  DiscountPromotionContainer,
  DiscountPromotionDescription,
  DiscountPromotionButton,
  ImageContainer,
  DiscountPromotionOrderButton,
} from './styles';

interface DiscountPromotionCardProps {
  item: PromotionDiscount;
}

//MAX DESCRIPTION 163 chars

const DiscountPromotionCard: React.FunctionComponent<DiscountPromotionCardProps> = ({ item }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const navigate = () => {
    navigation.navigate('Menu', { screen: 'MenuList', params: { goTo: item.discount.tabToDiscount }, initial: false });
  };

  return (
    <DiscountPromotionContainer onPress={navigate}>
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
      <DiscountPromotionDescription>
        <Text bold color="primary" fontSize={18}>
          {item.title}
        </Text>
        <Text color="primary" fontSize={14} light>
          {item.description}
        </Text>
      </DiscountPromotionDescription>
      <DiscountPromotionButton>
        <DiscountPromotionOrderButton>
          <Text color="fixedWhite" fontSize={14}>
            {item.cta}
          </Text>
        </DiscountPromotionOrderButton>
      </DiscountPromotionButton>
    </DiscountPromotionContainer>
  );
};

export default DiscountPromotionCard;
