import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ReservationCard from '../../../components/Profile/ReservationCard';
import useLocations from '../../../hooks/useLocations';
import useUserData from '../../../hooks/useUserData';
import { Booking } from '../../../types/Booking';
import { Venue } from '../../../types/Venue';

import { ReservationsContainer } from './styles';

interface ReservationsProps {}

const Reservations: React.FunctionComponent<ReservationsProps> = () => {
  const { userData } = useUserData();
  const [locations] = useLocations();

  const renderItem = ({ item }: { item: Booking }) => {
    const selectedVenue = locations.list.find((venue: Venue) => venue.id === item.venueId);
    return (
      <ReservationCard
        address={selectedVenue?.address || 'Address not Found'}
        date={item.date}
        people={item.people}
        time={item.time}
        venue={selectedVenue?.name || 'Venue name not Found'}
      />
    );

    return <></>;
  };

  return (
    <ReservationsContainer>
      <FlatList data={userData.bookings} horizontal={false} renderItem={renderItem} />
    </ReservationsContainer>
  );
};

export default Reservations;
