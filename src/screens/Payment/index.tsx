import React from 'react';

import PaymentOption from '../../components/Cart/Payment';

import { SelectServiceContainer } from './styles';

interface PaymentProps {}

const Payment: React.FunctionComponent<PaymentProps> = () => {
  return (
    <SelectServiceContainer>
      <PaymentOption />
    </SelectServiceContainer>
  );
};

export default Payment;
