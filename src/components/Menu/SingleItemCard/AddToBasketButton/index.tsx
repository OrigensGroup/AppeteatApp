import React from 'react';

import singleDrinkTranslations from '../../../../translations/singleDrink';

import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface BasketButtonProps {
  onClick: () => void;
  price: number;
}

const AddToBasketButton: React.FunctionComponent<BasketButtonProps> = ({ onClick, price }) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>(3)</ButtonText>
          <ButtonText>{singleDrinkTranslations.viewBasketButtonField.placeholder}</ButtonText>
          <ButtonText>+ {price}</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default AddToBasketButton;
