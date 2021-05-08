import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ReservationCard from '../../../components/Profile/ReservationCard';
import TopBar from '../../../components/shared/TopBar';

import useLocations from '../../../hooks/useLocations';
import useUserData from '../../../hooks/useUserData';
import { t } from '../../../translations';

import type { Booking } from '../../../types/Booking';
import type { Venue } from '../../../types/Venue';

import { ReservationsContainer, ReservationsList } from './styles';

interface ReservationsProps {}

const Reservations: React.FunctionComponent<ReservationsProps> = () => {
  const { userData } = useUserData();
  const [locations] = useLocations();

  const renderItem = ({ item }: { item: Booking }) => {
    const selectedVenue = locations.list.find((venue: Venue) => venue.id === item.venueId);

    return (
      <ReservationCard
        address={selectedVenue?.address || t('profileTranslations.reservationsPage.addressNotFound')}
        date={item.date}
        people={item.people}
        time={item.time}
        venue={selectedVenue?.name || t('profileTranslations.reservationsPage.nameNotFound')}
      />
    );
  };

  return (
    <ReservationsContainer>
      <TopBar back="back" hideFilter title={t('profileTranslations.reservationsPage.title')} />
      <ReservationsList>
        <FlatList data={userData.bookings} horizontal={false} renderItem={renderItem} />
      </ReservationsList>
    </ReservationsContainer>
  );
};

export default Reservations;
