import React from 'react';
import Text from '../../../Shared/Text';

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
  onClick?: () => void;
}

const DiscountPromotionCard: React.FunctionComponent<DiscountPromotionCardProps> = ({ item, onClick }) => {
  return (
    <DiscountPromotionContainer onPress={onClick}>
      <ImageContainer>
        <DiscountPromotionImage source={{ uri: item.image }} />
      </ImageContainer>
      <DiscountPromotionDescription>
        <Text fontSize={18} color="primary" bold>
          {item.title}
        </Text>
        <Text fontSize={12} color="tertiary" bold>
          {item.description}
        </Text>
      </DiscountPromotionDescription>
      <DiscountPromotionButton>
        <DiscountPromotionOrderButton>
          <Text color="secondary" fontSize={14} bold>
            {homeTranslations.discountPromotionCard.cta}
          </Text>
        </DiscountPromotionOrderButton>
      </DiscountPromotionButton>
    </DiscountPromotionContainer>
  );
};

export default DiscountPromotionCard;
