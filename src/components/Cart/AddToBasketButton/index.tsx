import React from 'react';
import Text from '../../shared/Text';

import { MainButtonWrapper, MainButton, TextWrapper } from './styles';

interface GoToCheckoutProps {
  onClick: () => void;
}

const GoToCheckout: React.FunctionComponent<GoToCheckoutProps> = ({ onClick }) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <Text color="primary" fontSize={18} bold>
            Go to Checkout
          </Text>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default GoToCheckout;
