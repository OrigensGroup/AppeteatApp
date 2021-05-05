import config from './config';

describe('config.ts', () => {
  it('should have specified key', () => {
    expect(config).toEqual(
      expect.objectContaining({
        STRIPE_ACCOUNT: expect.any(String),
        CONNECTED_ACCOUNT_ID: expect.any(String),
        FEE: expect.any(Number),
        CURRENCY: expect.any(String),
        APPLE_CURRENCY: expect.any(String),
        GOOGLE_WEBCLIENT_ID: expect.any(String),
        API_URL: expect.any(String),
        EXPERIENCE: expect.any(String),
      }),
    );
  });
});
