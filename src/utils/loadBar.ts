import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

import { ValueOf } from 'react-native-gesture-handler/lib/typescript/typeUtils';

import { Bar } from '../types/Bar';

const loadBar = async () => {
  const bar = {
    bookings: { list: [] },
    locations: { list: [] },
    menu: { items: [], tabs: [] },
    homepage: { sections: [] },
  } as Bar;

  try {
    crashlytics().log('Bar data loading attempt.');

    const barCollection = await firestore().collection('bar').get();

    const loadedDocs = await Promise.all(
      barCollection.docs.map(
        async (doc): Promise<{ id: keyof Bar; data: ValueOf<Bar> }> => {
          const data = (await doc.data()) as ValueOf<Bar>;
          const id = doc.id as keyof Bar;

          return { id, data };
        }
      )
    );

    loadedDocs.forEach((doc) => {
      //@ts-ignore
      bar[doc.id] = doc.data;
    });

    return bar;
  } catch (error) {
    crashlytics().log('Bar data loading failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return bar;
};

export default loadBar;
