import React from 'react';

import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface GoToCheckoutProps {
  onClick: () => void;
  price: number;
}

const GoToCheckout: React.FunctionComponent<GoToCheckoutProps> = ({ onClick }) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>Go to Checkout</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default GoToCheckout;
