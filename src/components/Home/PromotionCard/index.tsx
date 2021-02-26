import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { Marker } from '../../../screens/Book/LocationsList/useMarkers';

import Text from '../../Shared/Text';

import { PromotionCardContainer, PromotionCardImage, PromotionCardDescription, PromotionCardLike } from './styles';

interface CardProps {
  item: Marker;
  onClick?: () => void;
}

const PromotionCard: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <PromotionCardContainer onPress={onClick}>
      <PromotionCardImage source={{ uri: item.image }} />
      <PromotionCardDescription>
        <Text fontSize={20} color="#000000">
          {item.title}
        </Text>
        <Text fontSize={16} color="#000000">
          {item.description}
        </Text>
      </PromotionCardDescription>
      <PromotionCardLike>
        <Icon color={theme.colors.textPrimary} name="heart-outline" size={28} />
      </PromotionCardLike>
    </PromotionCardContainer>
  );
};

export default PromotionCard;
