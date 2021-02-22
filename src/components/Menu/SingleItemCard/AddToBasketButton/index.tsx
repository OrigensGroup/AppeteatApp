import React from 'react';

import singleDrinkTranslations from '../../../../translations/singleDrink';

import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface BasketButtonProps {
  onClick: () => void;
}

const AddToBasketButton: React.FunctionComponent<BasketButtonProps> = ({ onClick }) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>(3)</ButtonText>
          <ButtonText>{singleDrinkTranslations.viewBasketButtonField.placeholder}</ButtonText>
          <ButtonText>+ £7.5</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default AddToBasketButton;
