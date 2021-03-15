import React, { useState } from 'react';
import { Alert } from 'react-native';

import cartTranslations from '../../../translations/cart';
import Text from '../../shared/Text';
import ViewCta from '../../shared/ViewCta';

import ApplePay from './ApplePay';
import BankCard from './BankCard';
import CardDetails from './CardDetails';
import GooglePay from './GooglePay';
import OrderDetails from './OrderDetails';

import {
  PaymentList,
  PaymentOptionContainer,
  PaymentButtonContainer,
  PaymentMethodsContainer,
  TextContainer,
  HideCard,
} from './styles';

interface PaymentOptionProps {}

const PaymentOption: React.FunctionComponent<PaymentOptionProps> = () => {
  const [index, setIndex] = useState(5);

  return (
    <PaymentOptionContainer>
      <OrderDetails />
      <PaymentMethodsContainer>
        <TextContainer>
          <Text bold color="primary" fontSize={18}>
            {cartTranslations.paymentMethods.title}
          </Text>
        </TextContainer>
        <PaymentList>
          <BankCard active={index === 0} onClick={() => setIndex(0)} />
          <HideCard />
          <GooglePay active={index === 1} onClick={() => setIndex(1)} />
          <HideCard />
          <ApplePay active={index === 2} onClick={() => setIndex(2)} />
        </PaymentList>
      </PaymentMethodsContainer>
      {index === 0 && <CardDetails />}
      <PaymentButtonContainer>
        <ViewCta onClick={() => Alert.alert('Order Done')}>
          <Text bold color="secondary" fontSize={20}>
            {cartTranslations.pay.title}
          </Text>
        </ViewCta>
      </PaymentButtonContainer>
    </PaymentOptionContainer>
  );
};

export default PaymentOption;
