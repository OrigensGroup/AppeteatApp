import React from 'react';

import { ApplePayContainer, ApplePayImage } from './styles';

interface ApplePayProps {
  active?: boolean;
  onClick: () => void;
}

const ApplePay: React.FunctionComponent<ApplePayProps> = ({ active, onClick }) => {
  return (
    <ApplePayContainer active={active} onPress={onClick}>
      <ApplePayImage resizeMode="contain" source={require('./../../../../img/ApplePay.png')} />
    </ApplePayContainer>
  );
};

export default ApplePay;
