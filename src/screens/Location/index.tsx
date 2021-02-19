import React from 'react';
import { FlatList } from 'react-native';

import LocationCard from '../../components/Location/Card';
import SearchBar from '../../components/Menu/SearchBar';

import { LocationPageContainer, SearchBarWrapper } from './styles';

interface LocationProps {}

const Location: React.FunctionComponent<LocationProps> = () => {
  const DATA = [
    {
      id: '11',
      title: 'First Item',
    },
    {
      id: '12',
      title: 'Second Item',
    },
    {
      id: '13',
      title: 'Third Item',
    },
    {
      id: '14',
      title: 'Third Item',
    },
  ];

  const renderItem = () => (
    <LocationCard
      address='42-44 Great Windmill St, Soho, London W1D 7NB'
      imageUrl='../../img/mojito.jpg'
      phoneNumber='0754 9576820'
      title='Venue1'
    />
  );

  return (
    <LocationPageContainer>
      <SearchBarWrapper>
        <SearchBar placeholder='Da fixare' />
      </SearchBarWrapper>
      <FlatList data={DATA} renderItem={renderItem} />
    </LocationPageContainer>
  );
};

export default Location;
