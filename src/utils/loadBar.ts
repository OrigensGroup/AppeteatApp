import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

import { Bar } from '../types/Bar';

const loadBar = async () => {
  let bar = {
    locations: { list: [] },
    menu: { items: [], tabs: [] },
    homepage: { sections: [] },
  } as Bar;

  try {
    crashlytics().log('Bar data loading attempt.');

    const barCollection = await firestore().collection('bar').get();
    const allDocsLoaded = await Promise.all(barCollection.docs.map((doc) => doc.data()));

    bar = {
      //@ts-ignore
      homepage: allDocsLoaded[0],
      //@ts-ignore
      locations: allDocsLoaded[1],
      //@ts-ignore
      menu: allDocsLoaded[2],
    };
  } catch (error) {
    crashlytics().log('Bar data loading failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return bar;
};

export default loadBar;
