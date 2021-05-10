import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

import { ValueOf } from 'react-native-gesture-handler/lib/typescript/typeUtils';

import { Bar } from '../types/Bar';

import colors from '../theme/colors';
import { Order } from '../types/Order';

export const barInit: Bar = {
  bookings: { list: [] },
  locations: { list: [] },
  menu: { items: [], tabs: [] },
  homepage: { sections: [] },
  orders: { list: [] },
  settings: {
    serviceFee: 0,
    logoImage: '',
    deliverySettings: {
      closeTime: '',
      openTime: '',
      ordersPerTimeFrame: 0,
      timeFrame: 0,
      fee: 0,
    },
    colors,
    features: {
      FEAT_CASH_PAYMENT: false,
      FEAT_BOOK: false,
      FEAT_CART_DELIVERY: false,
      FEAT_CART_TAKEAWAY: false,
      FEAT_FAVORITE_COCKTAILS: false,
      FEAT_ORDERING: false,
      FEAT_DARK_MODE: false,
    },
  },
};

const loadBar = async (
  barCollectionInput?: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
) => {
  const bar = barInit;

  try {
    crashlytics().log('Bar data loading attempt.');

    const barCollection = barCollectionInput || (await firestore().collection('bar').get());

    const loadedDocs = await Promise.all(
      barCollection.docs.map(
        async (doc): Promise<{ id: keyof Bar; data: ValueOf<Bar> }> => {
          const data = (await doc.data()) as ValueOf<Bar>;
          const id = doc.id as keyof Bar;

          return { id, data };
        },
      ),
    );

    loadedDocs.forEach((doc) => {
      // @ts-ignore
      bar[doc.id] = doc.data;
    });

    const orderCollection = await firestore().collection('bar').doc('orders').collection('list').get();

    const loadedOrders = await Promise.all(
      orderCollection.docs.map(
        async (doc): Promise<Order> => {
          const data = (await doc.data()) as Order;

          return data;
        },
      ),
    );

    bar.orders.list = loadedOrders;

    return bar;
  } catch (error) {
    crashlytics().log('Bar data loading failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return bar;
};

export default loadBar;
