import React from 'react';
import useCart from '../../../hooks/useCart';
import currencyTranslations from '../../../translations/currency'
import menuTranslations from '../../../translations/menu'
import Text from '../../Shared/Text';
import { MainButtonWrapper, MainButton, TextWrapper } from './styles';

interface ViewBasketButtonProps {
  onClick: () => void;
}

const ViewBasketButton: React.FunctionComponent<ViewBasketButtonProps> = ({ onClick }) => {
  const { cart, pricing } = useCart();

  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <Text color='primary' fontSize={18} bold>{cart.length}</Text>
          <Text color='primary' fontSize={18} bold>{menuTranslations.viewBasketField.placeholder}</Text>
          <Text color='primary' fontSize={18} bold>{currencyTranslations.currencyField.placeholder}{pricing.subtotal}</Text>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default ViewBasketButton;
