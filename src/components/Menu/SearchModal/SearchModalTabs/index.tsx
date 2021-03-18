import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import FilterModalTab from './SearchModalTab';

import { FilterTabsContainer } from './styles';

interface FilterModalTabsProps {
  filterTabs: any;
  tabActive: number;
  onChange: (index: number) => void;
}

const FilterModalTabs: React.FunctionComponent<FilterModalTabsProps> = ({ filterTabs, onChange, tabActive }) => {
  return (
    <FilterTabsContainer>
      <FlatList
        data={filterTabs}
        horizontal
        keyExtractor={({ index }) => index}
        renderItem={({ index, item }) => (
          <FilterModalTab active={index === tabActive} index={index} onPress={onChange} title={item} />
        )}
      />
    </FilterTabsContainer>
  );
};

export default FilterModalTabs;
