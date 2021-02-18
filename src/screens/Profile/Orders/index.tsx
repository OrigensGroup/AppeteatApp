import React from "react";
import { FlatList } from "react-native-gesture-handler";
import OrderCard from "../../../components/Profile/OrderCard";
import { OrdersContainer } from "./styles";

type Item = {
  id: string;
  title: string;
};

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = () => {
  const DATA: Item[] = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Fourth Item",
    },
  ];
  const renderItem = ({ item }: { item: Item }) => (
    <OrderCard items="Mojito" date="11 May 2020 at 21:12" />
  );
  return (
    <OrdersContainer>
      <FlatList data={DATA} renderItem={renderItem} horizontal={false} />
    </OrdersContainer>
  );
};

export default Orders;
