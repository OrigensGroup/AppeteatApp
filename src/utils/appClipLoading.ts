import FastImage, { Source } from 'react-native-fast-image';

import stripe from 'tipsi-stripe';

// import * as Font from 'expo-font';

import Config from './config';

import loadBar, { barInit } from './loadBar';

export const appClipLoading = async () => {
  try {
    stripe.setOptions({
      publishableKey: Config.STRIPE_ACCOUNT,
      androidPayMode: 'test',
      merchantId: 'merchant.origens',
    });

    // await Font.loadAsync({
    //   Comfortaa: require('../theme/fonts/Comfortaa-Regular.ttf'),
    //   ComfortaaBold: require('../theme/fonts/Comfortaa-Bold.ttf'),
    //   ComfortaaLight: require('../theme/fonts/Comfortaa-Light.ttf'),
    // });

    const loadedBar = await loadBar();

    // const images = [
    //   require('../img/google.png'),
    //   require('../img/logo.png'),
    //   require('../img/ApplePay.png'),
    //   require('../img/GooglePay.png'),
    // ];

    // const cacheImages = images.map((image) => {
    //   return Asset.fromModule(image).downloadAsync();
    // });

    // await Promise.all(cacheImages);

    const alltogether = [...loadedBar.locations.list, ...loadedBar.menu.items, { image: loadedBar.settings.logoImage }];

    const imagesToLoad = alltogether.reduce((acc, item) => {
      if (item.image) {
        acc.push({ uri: item.image });
      }

      return acc;
    }, [] as Source[]);

    FastImage.preload(imagesToLoad);

    return loadedBar;
  } catch (error) {
    console.error(error);
    return barInit;
  }
};
