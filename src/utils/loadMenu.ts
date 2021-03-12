import firestore from '@react-native-firebase/firestore';
import crashlytics from '@react-native-firebase/crashlytics';

import { Menu } from '../contexts/Menu';

const getMenu = async () => {
  let menu = { items: [], tabs: [] } as Menu;

  try {
    crashlytics().log('Menu loading attempt.');
    menu = (await (await firestore().collection('bar').doc('menu').get()).data()) as Menu;
  } catch (error) {
    crashlytics().log('Menu loading failed.');
    crashlytics().recordError(error);
    console.error(error);
  }

  return menu;
};

export default getMenu;
