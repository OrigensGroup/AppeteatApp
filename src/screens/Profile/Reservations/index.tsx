import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ReservationCard from '../../../components/Profile/ReservationCard';

import { ReservationsContainer } from './styles';

interface ReservationsProps {}
type Item = {
  id: string;
  title: string;
};

const Reservations: React.FunctionComponent<ReservationsProps> = () => {
  const DATA: Item[] = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
  ];

  const renderItem = () => (
    <ReservationCard
      address="12 Upper St, The Angel, London N1 0PQ"
      date="22 March 2021"
      people="3"
      time="9 PM"
      venue="Be at One"
    />
  );

  return (
    <ReservationsContainer>
      <FlatList data={DATA} horizontal={false} renderItem={renderItem} />
    </ReservationsContainer>
  );
};

export default Reservations;
