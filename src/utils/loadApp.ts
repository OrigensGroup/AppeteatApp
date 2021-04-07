import crashlytics from '@react-native-firebase/crashlytics';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import FastImage, { Source } from 'react-native-fast-image';

// eslint-disable-next-line
import { STRIPE_ACCOUNT } from '@env';

import stripe from 'tipsi-stripe';

//@ts-ignore
import { Settings } from 'react-native-fbsdk-next';

import loadBar, { barInit } from './loadBar';

export const loadStuff = async () => {
  try {
    Settings.initializeSDK();

    stripe.setOptions({
      publishableKey: STRIPE_ACCOUNT,
      androidPayMode: 'test',
      merchantId: 'merchant.origens',
    });

    await Font.loadAsync({
      Comfortaa: require('../theme/fonts/Comfortaa-Regular.ttf'),
      ComfortaaBold: require('../theme/fonts/Comfortaa-Bold.ttf'),
      ComfortaaLight: require('../theme/fonts/Comfortaa-Light.ttf'),
    });

    const loadedBar = await loadBar();

    const images = [
      require('../img/google.png'),
      require('../img/logo.png'),
      require('../img/logo2.png'),
      require('../img/ApplePay.png'),
      require('../img/GooglePay.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);

    const alltogether = [...loadedBar.locations.list, ...loadedBar.menu.items];

    const imagesToLoad = alltogether.reduce((acc, item) => {
      if (item.image) {
        acc.push({ uri: item.image });
      }

      return acc;
    }, [] as Source[]);

    FastImage.preload(imagesToLoad);

    return loadedBar;
  } catch (error) {
    crashlytics().recordError(error);
    console.error(error);
    return barInit;
  }
};
