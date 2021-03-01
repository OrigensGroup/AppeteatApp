import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { MenuItem } from '../../../types/MenuItem';

import Text from '../../Shared/Text';

import {
  PromotionItemCardContainer,
  PromotionItemCardImage,
  PromotionItemCardDescription,
  PromotionItemCardLike,
} from './styles';

interface PromotionItemCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const PromotionItemCard: React.FunctionComponent<PromotionItemCardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <PromotionItemCardContainer onPress={onClick}>
      <PromotionItemCardImage source={{ uri: item.image }} />
      <PromotionItemCardDescription>
        <Text fontSize={20} color="primary">
          {item.title}
        </Text>
        <Text fontSize={16} color="primary">
          {item.description}
        </Text>
      </PromotionItemCardDescription>
      <PromotionItemCardLike>
        <Icon color={theme.colors.textPrimary} name="heart-outline" size={28} />
      </PromotionItemCardLike>
    </PromotionItemCardContainer>
  );
};

export default PromotionItemCard;
