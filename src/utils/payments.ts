/* eslint-disable */

import stripe, { Card, Charge, GeneratedErrors } from 'tipsi-stripe';

import { CONNECTED_ACCOUNT_ID, CURRENCY, FEE, API_URL, APPLE_CURRENCY } from '@env';

import type { Payment } from '../types/Payment';

type PaymentStatus = {
  paymentRes: Charge | GeneratedErrors | { type: 'NativeError'; message: string };
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
  try {
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
  } catch (e) {
    return {
      paymentRes: {
        type: 'NativeError',
        message: e.message,
      },
    };
  }
};

export const makeNativePayment = async (
  display: {
    label: string;
    amount: string;
  },
  payment: Omit<Payment, 'currency' | 'tokenId' | 'CONNECTED_STRIPE_ACCOUNT_ID' | 'fee'>
): Promise<PaymentStatus> => {
  try {
    const token = await stripe.paymentRequestWithNativePay(
      {
        currencyCode: APPLE_CURRENCY,
      },
      [display]
    );

    const postData: Payment = {
      ...payment,
      currency: CURRENCY,
      tokenId: token.tokenId,
      CONNECTED_STRIPE_ACCOUNT_ID: CONNECTED_ACCOUNT_ID,
      fee: FEE,
    };

    const res = await payToApi(postData);

    return res;
  } catch (e) {
    return {
      paymentRes: {
        type: 'NativeError',
        message: e.message,
      },
    };
  }
};
