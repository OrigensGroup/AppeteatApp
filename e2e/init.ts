import { cleanup, init, device } from 'detox';
import * as adapter from 'detox/runners/jest/adapter';

const config = require('../.detoxrc.json');

jest.setTimeout(120000);

beforeAll(async () => {
  await init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();

  await device.reloadReactNative();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
