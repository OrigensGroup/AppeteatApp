import firestore from '@react-native-firebase/firestore';
import { Menu } from '../contexts/Menu';

const getMenu = async () => {
  let menu = { items: [], tabs: [] } as Menu;

  try {
    menu = (await (await firestore().collection('bar').doc('menu').get()).data()) as Menu;
  } catch (error) {
    console.error(error);
  }

  return menu;
};

export default getMenu;
