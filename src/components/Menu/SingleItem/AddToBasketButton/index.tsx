import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { fixDecimals, calculateDiscount, calculateItemPrice } from '../../../../utils/priceCalculations';
import useCart from '../../../../hooks/useCart';

import { DataItem, MenuItem, SelectionExtras } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';
import QuantityCounter from '../Counter';

import { Discount } from '../../../../types/DiscountRules';

import menuTranslations from '../../../../translations/menu';

import currencyTranslations from '../../../../translations/currency';

import { AddToBasketButtonWrapper, ViewCtaButton, QuantityButton } from './styles';
import { findError } from '../../../../utils/findErrorFromSelectionExtras';

interface AddToBasketButtonProps {
  item: MenuItem;
  extras?: DataItem[];
  selectionExtras?: SelectionExtras;
  discount?: Discount;
}

const AddToBasketButton: React.FunctionComponent<AddToBasketButtonProps> = ({
  item,
  extras = [],
  selectionExtras,
  discount,
}) => {
  const [amount, setAmount] = useState(1);
  const [itemToAdd, setItemToAdd] = useState(item);
  const [extrasToAdd, setExtrasToAdd] = useState<DataItem[]>(extras);
  const [stepSize, setStepSize] = useState(1);
  const [customPrice, setCustomPrice] = useState(1);
  const { addItemToCart } = useCart();
  const navigation = useNavigation();

  const onUpdate = (updateAmount: number) => {
    setAmount(updateAmount);
  };

  const price = fixDecimals(
    calculateItemPrice({
      price: itemToAdd.price,
      extras: extrasToAdd,
      quantity: amount,
      customPriceReduction: customPrice,
    }),
  ).toFixed(2);

  const onClick = () => {
    addItemToCart({
      ...itemToAdd,
      quantity: amount,
      extras: extrasToAdd,
      customPriceReduction: customPrice,
    });
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

  // Use effect to pass the extras to the button
  useEffect(() => {
    if (selectionExtras) {
      let allTruthyCustomisation: DataItem[] = [];

      Object.values(selectionExtras).forEach((extras) => {
        allTruthyCustomisation = [
          ...allTruthyCustomisation,
          ...Object.values(extras.selectionCheckbox).filter((v) => v.selected),
        ];
      });

      setExtrasToAdd(allTruthyCustomisation);
    }
  }, [selectionExtras]);

  const isError =
    item.upgradableItems && item.upgradableItems?.length > 0 && selectionExtras && findError(selectionExtras);

  return (
    <AddToBasketButtonWrapper>
      <QuantityButton>
        <QuantityCounter amount={amount} onChange={onUpdate} stepSize={stepSize} />
      </QuantityButton>
      <ViewCtaButton>
        <ViewCta onClick={isError ? undefined : onClick}>
          {isError ? (
            <Text bold color="fixedWhite" fontSize={14}>
              {menuTranslations.singleItemPage.addToBasket.error}
            </Text>
          ) : (
            <>
              <Text bold color="fixedWhite" fontSize={14}>
                {menuTranslations.singleItemPage.addToBasket.cta}
              </Text>
              <Text bold color="fixedWhite" fontSize={14}>
                + {currencyTranslations.currencyField}
                {price}
              </Text>
            </>
          )}
        </ViewCta>
      </ViewCtaButton>
    </AddToBasketButtonWrapper>
  );
};

export default AddToBasketButton;
