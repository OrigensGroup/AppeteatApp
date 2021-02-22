import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MainButtonWrapper, MainButton, TextWrapper, ButtonText } from './styles';

interface GoToCheckoutProps {
  onClick: () => void;
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
