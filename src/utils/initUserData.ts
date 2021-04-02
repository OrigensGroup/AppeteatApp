import firestore from '@react-native-firebase/firestore';

import { User } from '../types/User';

export const defaultUserdata: User = {
  favoriteCocktails: [],
  default: true,
  bookings: [],
  orders: [],
};

const initUserData = async (userId: string) => {
  firestore().collection('users').doc(userId).set(defaultUserdata);
};

export default initUserData;
