import React, { useState } from 'react';

import { fixDecimals } from '../../../../contexts/Cart';
import useCart from '../../../../hooks/useCart';

import singleDrinkTranslations from '../../../../translations/singleDrink';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';
import QuantityCounter from '../Counter';

import { AddToBasketButtonWrapper, ViewCtaButton, QuantityButton } from './styles';

interface AddToBasketButtonProps {
  item: MenuItem;
  extras?: any[];
}

const AddToBasketButton: React.FunctionComponent<AddToBasketButtonProps> = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const { addItemToCart } = useCart();

  const onUpdate = (amount: number) => {
    setAmount(amount);
  };

  const onClick = () => {
    addItemToCart({ ...item, quantity: amount, customisations: [] });
  };

  return (
    <AddToBasketButtonWrapper>
      <QuantityButton>
        <QuantityCounter amount={amount} onChange={onUpdate} />
      </QuantityButton>
      <ViewCtaButton>
        <ViewCta onClick={onClick}>
          <Text bold color="secondary" fontSize={18}>
            {singleDrinkTranslations.viewBasketButtonField.placeholder}
          </Text>
          <Text bold color="secondary" fontSize={18}>
            + {fixDecimals(item.price * amount)}
          </Text>
        </ViewCta>
      </ViewCtaButton>
    </AddToBasketButtonWrapper>
  );
};

export default AddToBasketButton;
