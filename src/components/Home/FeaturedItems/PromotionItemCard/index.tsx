import React from 'react';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';

import Text from '../../../shared/Text';

import { PromotionItemCardContainer, PromotionItemCardImageContainer, PromotionItemCardDescription } from './styles';

interface PromotionItemCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const PromotionItemCard: React.FunctionComponent<PromotionItemCardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <PromotionItemCardContainer onPress={onClick}>
      <PromotionItemCardImageContainer>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: item.image,
            priority: FastImage.priority.high,
          }}
          style={{
            width: Number(theme.spacing.multiple(14).replace('px', '')),
            height: '100%',
            borderRadius: Number(theme.spacing.triple.replace('px', '')),
          }}
        />
      </PromotionItemCardImageContainer>
      <PromotionItemCardDescription>
        <Text color="primary" fontSize={18}>
          {item.title}
        </Text>
        <Text color="primary" fontSize={12} light>
          {item.description}
        </Text>
      </PromotionItemCardDescription>
    </PromotionItemCardContainer>
  );
};

export default PromotionItemCard;
