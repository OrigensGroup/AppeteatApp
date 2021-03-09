import React from 'react';

import { MenuItem } from '../../../../types/MenuItem';

import Text from '../../../shared/Text';

import {
  PromotionItemCardContainer,
  PromotionItemCardImageContainer,
  PromotionItemCardImage,
  PromotionItemCardDescription,
} from './styles';

interface PromotionItemCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const PromotionItemCard: React.FunctionComponent<PromotionItemCardProps> = ({ item, onClick }) => {
  return (
    <PromotionItemCardContainer onPress={onClick}>
      <PromotionItemCardImageContainer>
        <PromotionItemCardImage source={{ uri: item.image }} />
      </PromotionItemCardImageContainer>
      <PromotionItemCardDescription>
        <Text color="primary" fontSize={20}>
          {item.title}
        </Text>
        <Text color="primary" fontSize={16} light>
          {item.description}
        </Text>
      </PromotionItemCardDescription>
    </PromotionItemCardContainer>
  );
};

export default PromotionItemCard;
