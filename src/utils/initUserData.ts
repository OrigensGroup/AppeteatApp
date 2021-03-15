import firestore from '@react-native-firebase/firestore';

import { User } from '../types/User';

const defaultUserdata: User = {
  favoriteCocktails: [],
  default: true,
};

const initUserData = async (userId: string) => {
  firestore().collection('users').doc(userId).set(defaultUserdata);
};

export default initUserData;
