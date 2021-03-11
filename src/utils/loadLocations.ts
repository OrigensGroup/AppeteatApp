import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

import { Locations } from '../contexts/Locations';

const getLocations = async () => {
  let locations = { list: [] } as Locations;

  try {
    crashlytics().log('Location loading attempt.');
    locations = (await (await firestore().collection('bar').doc('locations').get()).data()) as Locations;
  } catch (error) {
    crashlytics().log('Location loading failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return locations;
};

export default getLocations;
