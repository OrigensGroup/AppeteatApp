import { useContext } from 'react';
import firestore from '@react-native-firebase/firestore';

import { BarContext } from '../contexts/Bar';

import { Orders } from '../types/Bar';
import { Order } from '../types/Order';

const useOrders = () => {
  const bar = useContext(BarContext);

  const orders = bar<Orders>('orders');

  const addNewOrder = async (order: Order) => {
    await firestore().collection('bar').doc('orders').collection('list').add(order);
  };

  return { orders: orders[0], addNewOrder };
};

export default useOrders;
