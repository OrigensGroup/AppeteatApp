import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "../../../components/Menu/SingleItemCard/styles";
import FavCard from "../../../components/Profile/FavCard";
import {
  FavouriteCocktailsContainer,
  CocktailContainer,
  CocktailWrap,
} from "./styles";

type Item = {
  id: string;
  title: string;
};

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
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
    <FavCard title="Mojito" description="Description" />
  );
  return (
    <FavouriteCocktailsContainer>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{ width: "50%" }}
      />
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
