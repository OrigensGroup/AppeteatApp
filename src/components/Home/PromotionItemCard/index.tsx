import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { Marker } from '../../../screens/Book/LocationsList/useMarkers';

import Text from '../../Shared/Text';

import {
  PromotionItemCardContainer,
  PromotionItemCardImage,
  PromotionItemCardDescription,
  PromotionItemCardLike,
} from './styles';

interface CardProps {
  item: Marker;
  onClick?: () => void;
}

const PromotionItemCard: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <PromotionItemCardContainer onPress={onClick}>
      <PromotionItemCardImage source={{ uri: item.image }} />
      <PromotionItemCardDescription>
        <Text fontSize={20} color="#000000">
          {item.title}
        </Text>
        <Text fontSize={16} color="#000000">
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
