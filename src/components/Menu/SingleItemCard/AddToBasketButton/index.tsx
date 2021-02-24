import React from 'react';
import singleDrinkTranslations from '../../../../translations/singleDrink';

import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface BasketButtonProps {
  onClick: () => void;
  price: any;
}

const AddToBasketButton: React.FunctionComponent<BasketButtonProps> = ({ onClick, price }) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>{singleDrinkTranslations.viewBasketButtonField.placeholder}</ButtonText>
          <ButtonText>+ {price}</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default AddToBasketButton;
