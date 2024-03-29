import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

import { User } from '../types/User';

export const defaultUserdata: User = {
  favoriteCocktails: [],
  default: true,
  bookings: [],
  orders: [],
};

export const initUserData = async (userId: string) => {
  firestore().collection('users').doc(userId).set(defaultUserdata);
};

const getUserData = async (userId: string) => {
  let userData = defaultUserdata;

  try {
    crashlytics().log('User data loading attempt.');
    const collection = await firestore().collection('users').doc(userId).get();
    const newUserData = (await collection.data()) as User;
    userData = { ...userData, ...newUserData, default: false };
  } catch (error) {
    crashlytics().log('User data loading failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return userData;
};

export const saveUserData = async (userId: string, data: User) => {
  const userData = data;

  try {
    crashlytics().log('User data updating attempt.');

    await firestore()
      .collection('users')
      .doc(userId)
      .set({ ...data });
  } catch (error) {
    crashlytics().log('User data updating failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return userData;
};

export default getUserData;
