import { useContext } from 'react';

import { BarContext } from '../contexts/Bar';

import { Orders } from '../types/Bar';

const useOrders = () => {
  const bar = useContext(BarContext);

  return bar<Orders>('orders');
};

export default useOrders;
