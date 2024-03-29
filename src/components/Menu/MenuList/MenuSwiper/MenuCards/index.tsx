import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import FastImage from 'react-native-fast-image';
import { t } from '../../../../../translations';

import Text from '../../../../shared/Text';
import IconButton from '../../../../shared/IconButton';

import useUserData from '../../../../../hooks/useUserData';

import type { MenuItem } from '../../../../../types/MenuItem';
import type { Discount } from '../../../../../types/DiscountRules';

import { fixDecimals } from '../../../../../utils/priceCalculations';
import { normalisedSource } from '../../../../../utils/image';

import {
  CardContainer,
  ImageWrapper,
  CardDescription,
  CardTitle,
  CardMainItem,
  CardPrice,
  DiscountTag,
  DiscountPrice,
  Price,
  LikeIcon,
} from './styles';

interface CardProps {
  onClick?: () => void;
  item: MenuItem;
  discount?: Discount;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ discount, item, onClick }) => {
  const theme = useTheme();
  const { userData } = useUserData();
  const navigation = useNavigation();

  const navigate = () => {
    onClick && onClick();
    navigation.navigate('Menu', {
      screen: 'SingleItem',
      params: { item, discount },
      initial: false,
    });
  };

  const iLikeThis = userData.favoriteCocktails.includes(item.id);

  const finalPrice =
    discount && discount.type === 'tabDiscount'
      ? fixDecimals(item.price - (item.price * discount.amountForDiscount) / 100).toFixed(2)
      : fixDecimals(item.price).toFixed(2);

  return (
    <CardContainer onPress={navigate}>
      <ImageWrapper>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={normalisedSource(item.image)}
          style={{
            width: Number(theme.spacing.multiple(12).replace('px', '')),
            height: Number(theme.spacing.multiple(12).replace('px', '')),
            borderRadius: Number(theme.spacing.triple.replace('px', '')),
          }}
        />
      </ImageWrapper>
      <CardDescription>
        <CardTitle>
          <Text bold color="primary" fontSize={14}>
            {item.title}
          </Text>
        </CardTitle>
        <CardMainItem>
          <Text color="quartiary" fontSize={12}>
            {item.description}
          </Text>
        </CardMainItem>
      </CardDescription>
      {!item.soldout ? (
        <CardPrice>
          {discount && discount.type === 'tabDiscount' ? (
            <>
              <DiscountTag>
                <Text bold color="secondary" fontSize={12}>
                  - {discount.amountForDiscount}%
                </Text>
              </DiscountTag>
              <DiscountPrice>
                <Text bold color="quartiary" fontSize={12} strike>
                  {t('currencyTranslations.currencyField')}
                  {item.price}
                </Text>
              </DiscountPrice>
            </>
          ) : (
            iLikeThis && (
              <LikeIcon>
                <IconButton color={theme.colors.actionRed} iconName="md-heart" size={24} />
              </LikeIcon>
            )
          )}
          <Price move={!discount}>
            <Text bold color="tertiary" fontSize={14}>
              {t('currencyTranslations.currencyField')}
              {finalPrice}
            </Text>
          </Price>
        </CardPrice>
      ) : (
        <CardPrice>
          <Price move={!discount}>
            <Text bold color="tertiary" fontSize={10}>
              {t('menuTranslations.menuPage.menuCard.soldout')}
            </Text>
          </Price>
        </CardPrice>
      )}
    </CardContainer>
  );
};

export default MenuCard;
