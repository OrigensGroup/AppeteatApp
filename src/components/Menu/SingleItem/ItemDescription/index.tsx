import React from 'react';

import { fixDecimals } from '../../../../utils/priceCalculations';

import { Discount } from '../../../../types/DiscountRules';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import {
  ItemDescriptionContainer,
  ItemDescriptionTitle,
  ItemDescriptionDesc,
  PriceSection,
  ItemDescriptionTitleText,
} from './styles';
import { t } from '../../../../translations';

interface ItemDescriptionProps {
  item: MenuItem;
  discount?: Discount;
}

const ItemDescription: React.FunctionComponent<ItemDescriptionProps> = ({ discount, item }) => {
  const finalPrice =
    discount && discount.type === 'tabDiscount' && discount.amountForDiscount
      ? fixDecimals(item.price - (item.price * discount.amountForDiscount) / 100).toFixed(2)
      : fixDecimals(item.price).toFixed(2);

  return (
    <ItemDescriptionContainer>
      <ItemDescriptionTitle>
        <ItemDescriptionTitleText>
          <Text bold color="primary" fontSize={18}>
            {item.title}
          </Text>
        </ItemDescriptionTitleText>
        {!item.soldout ? (
          <PriceSection>
            {discount && discount.type === 'tabDiscount' && (
              <Text bold color="quartiary" fontSize={14} strike>
                {t('currencyTranslations.currencyField')}
                {item.price}
              </Text>
            )}
            <Text bold color="tertiary" fontSize={18}>
              {t('currencyTranslations.currencyField')}
              {finalPrice}
            </Text>
          </PriceSection>
        ) : (
          <PriceSection>
            <Text bold color="tertiary" fontSize={14}>
              {t('menuTranslations.menuPage.menuCard.soldout')}
            </Text>
          </PriceSection>
        )}
      </ItemDescriptionTitle>
      <ItemDescriptionDesc>
        <Text color="primary" fontSize={14}>
          {item.description}
        </Text>
      </ItemDescriptionDesc>
    </ItemDescriptionContainer>
  );
};

export default ItemDescription;
