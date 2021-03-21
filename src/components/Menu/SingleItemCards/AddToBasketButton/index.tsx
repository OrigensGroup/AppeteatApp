import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { fixDecimals } from '../../../../contexts/Cart';
import useCart from '../../../../hooks/useCart';

import singleDrinkTranslations from '../../../../translations/singleDrink';
import { DataItem, MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';
import QuantityCounter from '../Counter';

import { Discount } from '../../../../types/DiscountRules';
import { calculateDiscount, calculateItemPrice } from '../../../../utils/priceCalculations';

import { AddToBasketButtonWrapper, ViewCtaButton, QuantityButton } from './styles';

interface AddToBasketButtonProps {
  item: MenuItem;
  extras?: DataItem[];
  discount?: Discount;
}

const AddToBasketButton: React.FunctionComponent<AddToBasketButtonProps> = ({ item, extras = [], discount }) => {
  const [amount, setAmount] = useState(1);
  const [itemToAdd, setItemToAdd] = useState(item);
  const [extrasToAdd, setExtrasToAdd] = useState<DataItem[]>(extras);
  const [stepSize, setStepSize] = useState(1);
  const [customPrice, setCustomPrice] = useState(1);
  const { addItemToCart } = useCart();
  const navigation = useNavigation();

  const onUpdate = (amount: number) => {
    setAmount(amount);
  };

  const price = fixDecimals(
    calculateItemPrice({
      price: itemToAdd.price,
      extras: extrasToAdd,
      quantity: amount,
      customPriceReduction: customPrice,
    })
  );

  const onClick = () => {
    addItemToCart({ ...itemToAdd, quantity: amount, extras: extrasToAdd, customPriceReduction: customPrice });
    navigation.goBack();
  };

  useEffect(() => {
    if (discount) {
      if (discount.type === 'tabDiscount') {
        const newPrice = calculateDiscount(item.price, discount.amountForDiscount);
        setItemToAdd((oldItem) => ({ ...oldItem, price: newPrice }));
      }

      if (discount.type === 'twoForOne') {
        setStepSize(2);
        setAmount(2);
        setCustomPrice(0.5);
      }
    }
  }, [item.price, discount]);

  useEffect(() => {
    setExtrasToAdd(extras);
  }, [extras]);

  return (
    <AddToBasketButtonWrapper>
      <QuantityButton>
        <QuantityCounter amount={amount} onChange={onUpdate} stepSize={stepSize} />
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
