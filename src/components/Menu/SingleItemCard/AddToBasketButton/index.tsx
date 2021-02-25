import React from 'react';

import singleDrinkTranslations from '../../../../translations/singleDrink';
import QuantityCounter from '../Counter';

import {
  MainButton,
  TextWrapper,
  ButtonText,
  BottomButtonsWrapper
} from './styles';

interface BasketButtonProps {
  onClick: () => void;
  price: any;
}

const AddToBasketButton: React.FunctionComponent<BasketButtonProps> = ({ onClick, price }) => {
  return (
    <BottomButtonsWrapper>
      <QuantityCounter />
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>{singleDrinkTranslations.viewBasketButtonField.placeholder}</ButtonText>
          <ButtonText>+ {price}</ButtonText>
        </TextWrapper>
      </MainButton>
    </BottomButtonsWrapper>
  );
};

export default AddToBasketButton;
