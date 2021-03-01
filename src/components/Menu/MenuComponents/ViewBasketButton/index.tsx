import React from 'react';
import useCart from '../../../../hooks/useCart';
import currencyTranslations from '../../../../translations/currency'
import menuTranslations from '../../../../translations/menu'
import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface ViewBasketButtonProps {
  onClick: () => void;
}

const ViewBasketButton: React.FunctionComponent<ViewBasketButtonProps> = ({ onClick }) => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>{cart.length}</ButtonText>
          <ButtonText>{menuTranslations.viewBasketField.placeholder}</ButtonText>
          <ButtonText>{currencyTranslations.currencyField.placeholder}{total}</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default ViewBasketButton;
