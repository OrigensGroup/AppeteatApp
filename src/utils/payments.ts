/* eslint-disable */

import stripe, { Card, Charge, GeneratedErrors } from 'tipsi-stripe';

import { CONNECTED_ACCOUNT_ID, CURRENCY, FEE, API_URL } from '@env';

import { Payment } from '../types/Payment';

type PaymentStatus = {
  paymentRes: Charge | GeneratedErrors;
};

const payToApi = async (payment: Payment): Promise<PaymentStatus> => {
  const res = await fetch(`${API_URL}/api/payments`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ payment }),
  });

  return res.json();
};

export const makeCardPayment = async (
  card: Card,
  payment: Omit<Payment, 'currency' | 'tokenId' | 'CONNECTED_STRIPE_ACCOUNT_ID' | 'fee'>
): Promise<PaymentStatus> => {
  const token = await stripe.createTokenWithCard({
    ...card,
  });

  const postData: Payment = {
    ...payment,
    currency: CURRENCY,
    tokenId: token.tokenId,
    CONNECTED_STRIPE_ACCOUNT_ID: CONNECTED_ACCOUNT_ID,
    fee: FEE,
  };

  const res = await payToApi(postData);

  return res;
};
