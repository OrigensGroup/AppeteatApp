import firestore from '@react-native-firebase/firestore';
import { Locations } from '../contexts/Locations';

const getLocations = async () => {
  let locations = { list: [] } as Locations;

  try {
    locations = (await (await firestore().collection('bar').doc('locations').get()).data()) as Locations;
  } catch (error) {
    console.error(error);
  }

  return locations;
};

export default getLocations;
