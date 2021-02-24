import React from "react";
import { Dimensions, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FavCard from "../../../components/Profile/FavCard";
import {
  FavouriteCocktailsContainer,
  Container,
} from "./styles";

type Item = {
  id: string;
  title: string;
};

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { width }=Dimensions.get("window")
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
    <View style={{width: width/2}}><FavCard title="Mojito" description="Descriptions" /></View>
  );
  return (
    <FavouriteCocktailsContainer>
      <Container>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
      /></Container>
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
