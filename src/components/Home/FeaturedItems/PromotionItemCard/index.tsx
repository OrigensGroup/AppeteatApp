import React from 'react';
import { useTheme } from 'styled-components';
import { MenuItem } from '../../../../types/MenuItem';

import HeartLike from '../../../Shared/HeartLike';

import Text from '../../../Shared/Text';

import {
  PromotionItemCardContainer,
  PromotionItemCardImageContainer,
  PromotionItemCardImage,
  PromotionItemCardDescription,
  PromotionItemCardLikeContainer,
} from './styles';

interface PromotionItemCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const PromotionItemCard: React.FunctionComponent<PromotionItemCardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <PromotionItemCardContainer onPress={onClick}>
      <PromotionItemCardImageContainer>
        <PromotionItemCardImage source={{ uri: item.image }} />
      </PromotionItemCardImageContainer>
      <PromotionItemCardDescription>
        <Text fontSize={20} color="primary">
          {item.title}
        </Text>
        <Text fontSize={16} color="primary" light>
          {item.description}
        </Text>
      </PromotionItemCardDescription>
      <PromotionItemCardLikeContainer>
        <HeartLike />
      </PromotionItemCardLikeContainer>
    </PromotionItemCardContainer>
  );
};

export default PromotionItemCard;
