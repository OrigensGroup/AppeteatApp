import React from 'react';
import { FlatList } from 'react-native';

import LocationCard from '../../../components/Location/Card';
import SearchBar from '../../../components/Menu/SearchBar';

import { LocationPageContainer, SearchBarWrapper } from './styles';

interface LocationsListProps {}

type Item = {
  id: string;
  title: string;
};

const LocationsList: React.FunctionComponent<LocationsListProps> = () => {
  const DATA: Item[] = [
    {
      id: '7',
      title: 'First Item',
    },
    {
      id: '8',
      title: 'Second Item',
    },
    {
      id: '9',
      title: 'Third Item',
    },
    {
      id: '10',
      title: 'Third Item',
    },
  ];

  const renderItem = () => (
    <LocationCard
      address="42-44 Great Windmill St, Soho, London W1D 7NB"
      imageUrl="../../img/venue.jpg"
      phoneNumber="0754 9576820"
      title="Venue1"
    />
  );

  return (
    <LocationPageContainer>
      <SearchBarWrapper>
        <SearchBar placeholder="Da fixare" />
      </SearchBarWrapper>
      <FlatList data={DATA} renderItem={renderItem} />
    </LocationPageContainer>
  );
};

export default LocationsList;
