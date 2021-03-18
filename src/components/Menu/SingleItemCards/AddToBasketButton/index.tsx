import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { fixDecimals } from '../../../../contexts/Cart';
import useCart from '../../../../hooks/useCart';

import singleDrinkTranslations from '../../../../translations/singleDrink';
import { DataItem, MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';
import QuantityCounter from '../Counter';

import { AddToBasketButtonWrapper, ViewCtaButton, QuantityButton } from './styles';

interface AddToBasketButtonProps {
  item: MenuItem;
  extras?: DataItem[];
}

const AddToBasketButton: React.FunctionComponent<AddToBasketButtonProps> = ({ item, extras = [] }) => {
  const [amount, setAmount] = useState(1);
  const { addItemToCart } = useCart();
  const navigation = useNavigation();

  const onUpdate = (amount: number) => {
    setAmount(amount);
  };

  const price = fixDecimals((item.price + extras.reduce((acc, extra) => acc + extra.price, 0)) * amount);

  const onClick = () => {
    addItemToCart({ ...item, quantity: amount, extras });
    navigation.goBack();
  };

  return (
    <AddToBasketButtonWrapper>
      <QuantityButton>
        <QuantityCounter amount={amount} onChange={onUpdate} />
      </QuantityButton>
      <ViewCtaButton>
        <ViewCta onClick={onClick}>
          <Text bold color="fixedWhite" fontSize={18}>
            {singleDrinkTranslations.viewBasketButtonField.placeholder}
          </Text>
          <Text bold color="fixedWhite" fontSize={18}>
            + {price}
          </Text>
        </ViewCta>
      </ViewCtaButton>
    </AddToBasketButtonWrapper>
  );
};

export default AddToBasketButton;
