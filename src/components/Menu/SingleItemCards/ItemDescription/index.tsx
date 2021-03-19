import React from 'react';

import { fixDecimals } from '../../../../utils/priceCalculations';

import currencyTranslations from '../../../../translations/currency';
import { Discount } from '../../../../types/DiscountRules';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { ItemDescriptionContainer, ItemDescriptionTitle, ItemDescriptionDesc, PriceSection } from './styles';

interface ItemDescriptionProps {
  item: MenuItem;
  discount?: Discount;
}

const ItemDescription: React.FunctionComponent<ItemDescriptionProps> = ({ discount, item }) => {
  const finalPrice =
    discount && discount.type === 'tabDiscount' && discount.amountForDiscount
      ? fixDecimals(item.price - (item.price * discount.amountForDiscount) / 100)
      : item.price;

  return (
    <ItemDescriptionContainer>
      <ItemDescriptionTitle>
        <Text bold color="primary" fontSize={18}>
          {item.title}
        </Text>
        <PriceSection>
          {discount && discount.type === 'tabDiscount' && (
            <Text bold color="quartiary" fontSize={14} strike>
              {currencyTranslations.currencyField.placeholder}
              {item.price}
            </Text>
          )}
          <Text bold color="tertiary" fontSize={18}>
            {currencyTranslations.currencyField.placeholder}
            {finalPrice}
          </Text>
        </PriceSection>
      </ItemDescriptionTitle>
      <ItemDescriptionDesc>
        <Text color="primary" fontSize={16}>
          {item.description}
        </Text>
      </ItemDescriptionDesc>
    </ItemDescriptionContainer>
  );
};

export default ItemDescription;
