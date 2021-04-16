import { by, expect, element, device } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have LoginButton', async () => {
    await expect(element(by.id('LoginButton'))).toBeVisible();
  });
});
