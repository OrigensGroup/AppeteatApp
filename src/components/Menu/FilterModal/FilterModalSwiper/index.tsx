import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import FilterModalItem from './FilterModalItem';

import { FilterModalPageWrapper } from './styles';

interface FilterModalSwiperProps {
  filterItems: any;
}

const FilterModalSwiper: React.FunctionComponent<FilterModalSwiperProps> = ({ filterItems }) => {
  return (
    <FilterModalPageWrapper>
      <FlatList
        data={filterItems}
        keyExtractor={({ index }) => index}
        numColumns={3}
        renderItem={({ item }) => <FilterModalItem item={item} onClick={() => console.log('Hello World')} />}
      />
    </FilterModalPageWrapper>
  );
};

export default FilterModalSwiper;
