import React from 'react';

import { fixDecimals } from '../../../../utils/priceCalculations';

import currencyTranslations from '../../../../translations/currency';
import { Discount } from '../../../../types/DiscountRules';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import menuTranslations from '../../../../translations/menu';

import { ItemDescriptionContainer, ItemDescriptionTitle, ItemDescriptionDesc, PriceSection } from './styles';

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
        <Text bold color="primary" fontSize={18}>
          {item.title}
        </Text>
        {!item.soldout ? (
          <PriceSection>
            {discount && discount.type === 'tabDiscount' && (
              <Text bold color="quartiary" fontSize={14} strike>
                {currencyTranslations.currencyField}
                {item.price}
              </Text>
            )}
            <Text bold color="tertiary" fontSize={18}>
              {currencyTranslations.currencyField}
              {finalPrice}
            </Text>
          </PriceSection>
        ) : (
          <PriceSection>
            <Text bold color="tertiary" fontSize={14}>
              {menuTranslations.menuPage.menuCard.soldout}
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
