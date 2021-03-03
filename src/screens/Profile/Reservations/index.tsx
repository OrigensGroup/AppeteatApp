import React from "react";
import { Dimensions, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ReservationCard from "../../../components/Profile/ReservationCard";
import { ReservationsContainer } from "./styles";

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

  const renderItem = ({ item }: { item: Item }) => (
    <ReservationCard venue="Be at One" address="12 Upper St, The Angel, London N1 0PQ" date='22 March 2021' time='9 PM' people='3' />
  );
  return <ReservationsContainer>
    <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={false}
      />
  </ReservationsContainer>
};

export default Reservations;
