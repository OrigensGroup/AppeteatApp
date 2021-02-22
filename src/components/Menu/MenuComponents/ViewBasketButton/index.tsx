import React from 'react';

import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface ViewBasketButtonProps {
  onClick: () => void;
}

const ViewBasketButton: React.FunctionComponent<ViewBasketButtonProps> = ({ onClick }) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>(3)</ButtonText>
          <ButtonText>View Basket</ButtonText>
          <ButtonText>£7.5</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default ViewBasketButton;
