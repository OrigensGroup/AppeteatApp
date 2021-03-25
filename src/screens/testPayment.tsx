import React, { useEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import stripe from 'tipsi-stripe';

import Text from '../components/shared/Text';

//@ts-ignore
import { Payment } from '../types/Payment';

interface TestPaymentProps {}

const TestPayment: React.FunctionComponent<TestPaymentProps> = () => {
  useEffect(() => {
    stripe.setOptions({
      publishableKey:
        'pk_test_51IXoayHjmBwwWLCdGtfw6jG2J4BopyV7zYewSs1QnZ8oLa6B7lBn4jRSsEydrLuhmzIKcVpQjjpKXuV2uwgvmiYf00raAa3MDs',
      androidPayMode: 'test',
    });
  }, []);

  const onClick = async () => {
    const token = await stripe.createTokenWithCard({
      // mandatory
      number: '4242424242424242',
      expMonth: 11,
      expYear: 22,
      cvc: '223',
    });

    console.log(token);

    const postData: Payment = {
      currency: 'gbp',
      price: 200,
      customerEmail: 'test@mail.com',
      product: 'Cazzi in culo',
      tokenId: token.tokenId,
      CONNECTED_STRIPE_ACCOUNT_ID: 'acct_1IZ0PIIEXsFuf8rg',
      fee: 20,
    };

    fetch('http://192.168.1.120:3000/api/payments', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ payment: postData }),
    })
      .then((d) => d.json())
      .then((d) => Alert.alert(JSON.stringify(d)));
  };

  return (
    <TouchableOpacity onPress={onClick} style={{ margin: 80 }}>
      <Text color="tertiary" fontSize={20}>
        Pay!
      </Text>
    </TouchableOpacity>
  );
};

export default TestPayment;
