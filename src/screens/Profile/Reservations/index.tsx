import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ReservationCard from '../../../components/Profile/ReservationCard';
import useUserData from '../../../hooks/useUserData';
import { Booking } from '../../../types/Booking';

import { ReservationsContainer } from './styles';

interface ReservationsProps {}

const Reservations: React.FunctionComponent<ReservationsProps> = () => {
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: Booking }) => (
    <ReservationCard
      address="12 Upper St, The Angel, London N1 0PQ"
      date={item.date}
      people={item.people}
      time={item.time}
      venue={item.venue}
    />
  );

  return (
    <ReservationsContainer>
      <FlatList data={userData.bookings} horizontal={false} renderItem={renderItem} />
    </ReservationsContainer>
  );
};

export default Reservations;
