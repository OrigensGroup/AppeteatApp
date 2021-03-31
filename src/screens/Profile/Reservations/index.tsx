import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ReservationCard from '../../../components/Profile/ReservationCard';

import useLocations from '../../../hooks/useLocations';
import useUserData from '../../../hooks/useUserData';
import profileTranslations from '../../../translations/profile';

import type { Booking } from '../../../types/Booking';
import type { Venue } from '../../../types/Venue';

import { ReservationsContainer } from './styles';

interface ReservationsProps {}

const Reservations: React.FunctionComponent<ReservationsProps> = () => {
  const { userData } = useUserData();
  const [locations] = useLocations();

  const renderItem = ({ item }: { item: Booking }) => {
    const selectedVenue = locations.list.find((venue: Venue) => venue.id === item.venueId);

    return (
      <ReservationCard
        address={selectedVenue?.address || profileTranslations.reservationsPage.addressNotFound}
        date={item.date}
        people={item.people}
        time={item.time}
        venue={selectedVenue?.name || profileTranslations.reservationsPage.nameNotFound}
      />
    );
  };

  return (
    <ReservationsContainer>
      <FlatList data={userData.bookings} horizontal={false} renderItem={renderItem} />
    </ReservationsContainer>
  );
};

export default Reservations;
