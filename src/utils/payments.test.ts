import stripe from 'tipsi-stripe';
import Config from './config';

import { makeCardPayment, makeNativePayment } from './payments';

const mockToken = { tokenId: 'tojen' };

jest.mock(
  'tipsi-stripe',
  () => {
    return {
      createTokenWithCard: jest.fn().mockResolvedValue(mockToken),
      paymentRequestWithNativePay: jest.fn().mockResolvedValue(mockToken),
    };
  },
  { virtual: true },
);

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('payments.ts', () => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
    }),
  );

  beforeEach(() => {
    // @ts-ignore
    fetch.mockClear();
  });
  it('calls fetch with the correct values for the api', async () => {
    const card = { cvc: '111', expMonth: 12, expYear: 22, number: '4242424242424242' };
    await makeCardPayment(card, { customerEmail: 'mail@mail.com', price: 9.99, product: 'product' });

    expect(stripe.createTokenWithCard).toHaveBeenCalledWith({
      ...card,
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        currency: Config.CURRENCY,
        tokenId: mockToken.tokenId,
        CONNECTED_STRIPE_ACCOUNT_ID: Config.CONNECTED_ACCOUNT_ID,
        fee: Config.FEE,
      }),
    });
  });
});
