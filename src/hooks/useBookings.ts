import { useContext } from 'react';
import firestore from '@react-native-firebase/firestore';

import { BarContext } from '../contexts/Bar';

import { Bookings } from '../types/Bar';
import { Booking } from '../types/Booking';

const useBookings = () => {
  const bar = useContext(BarContext);

  const bookings = bar<Bookings>('bookings');

  const addNewBooking = async (booking: Booking) => {
    await firestore().collection('bar').doc('bookings').collection('list').add(booking);
  };

  return { bookings: bookings[0], addNewBooking };
};

export default useBookings;
