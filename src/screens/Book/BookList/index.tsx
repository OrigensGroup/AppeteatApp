import { useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import LocationCard from "../../../components/Location/Card";
import SearchBar from "../../../components/Menu/SearchBar";
import { LocationPageContainer, SearchBarWrapper } from "./styles";

interface BookListProps {}

type Item = {
  id: string;
  title: string;
};

const BookList: React.FunctionComponent<BookListProps> = () => {
  const DATA: Item[] = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const renderItem = ({ item }: { item: Item }) => (
    <LocationCard
      imageUrl="../../img/venue.jpg"
      title="Venue1"
      address="42-44 Great Windmill St, Soho, London W1D 7NB"
      phoneNumber="0754 9576820"
    />
  );
  return (
    <LocationPageContainer>
      <SearchBarWrapper>
        <SearchBar description="Da fixare" />
      </SearchBarWrapper>
      <FlatList data={DATA} renderItem={renderItem} />
    </LocationPageContainer>
  );
};

export default BookList;
