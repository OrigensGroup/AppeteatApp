/* eslint-disable */

import stripe, { Card, Charge, GeneratedErrors } from 'tipsi-stripe';

import Config from '../utils/config';

import type { Payment } from '../types/Payment';

export type PaymentStatus = {
  paymentRes: Charge | GeneratedErrors | { type: 'NativeError'; message: string };
};

const payToApi = async (payment: Payment): Promise<PaymentStatus> => {
  const res = await fetch(`${Config.API_URL}/api/payments`, {
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
  payment: Omit<Payment, 'currency' | 'tokenId' | 'CONNECTED_STRIPE_ACCOUNT_ID' | 'fee'>,
): Promise<PaymentStatus> => {
  try {
    const token = await stripe.createTokenWithCard({
      ...card,
    });

    const postData: Payment = {
      ...payment,
      currency: Config.CURRENCY,
      tokenId: token.tokenId,
      CONNECTED_STRIPE_ACCOUNT_ID: Config.CONNECTED_ACCOUNT_ID,
      fee: Config.FEE,
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
  payment: Omit<Payment, 'currency' | 'tokenId' | 'CONNECTED_STRIPE_ACCOUNT_ID' | 'fee'>,
): Promise<PaymentStatus> => {
  try {
    const token = await stripe.paymentRequestWithNativePay(
      {
        currencyCode: Config.APPLE_CURRENCY,
      },
      [display],
    );

    const postData: Payment = {
      ...payment,
      currency: Config.CURRENCY,
      tokenId: token.tokenId,
      CONNECTED_STRIPE_ACCOUNT_ID: Config.CONNECTED_ACCOUNT_ID,
      fee: Config.FEE,
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
