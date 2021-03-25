import { useContext } from 'react';

import { BarContext } from '../contexts/Bar';

import { Bookings } from '../types/Bar';

const useBookings = () => {
  const bar = useContext(BarContext);

  return bar<Bookings>('bookings');
};

export default useBookings;
