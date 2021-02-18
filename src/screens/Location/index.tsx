import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import LocationCard from "../../components/Location/Card";
import SearchBar from "../../components/Menu/MenuComponents/SearchBar";
import { LocationPageContainer, SearchBarWrapper } from "./styles";

interface LocationProps {}

const Location: React.FunctionComponent<LocationProps> = () => {
  const DATA = [
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
  const renderItem = ({ item }) => (
    <LocationCard
      imageUrl="../../img/mojito.jpg"
      title="Venue1"
      address="42-44 Great Windmill St, Soho, London W1D 7NB"
      phoneNumber="0754 9576820"
    ></LocationCard>
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

export default Location;
