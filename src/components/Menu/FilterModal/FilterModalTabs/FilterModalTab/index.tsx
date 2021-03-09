import React from 'react';

import Text from '../../../../shared/Text';

import { FilterTabContainer } from './styles';

interface FilterModalTabProps {
  title: string;
  active: boolean;
  index: number;
  onPress: (index: number) => void;
}

const FilterModalTab: React.FunctionComponent<FilterModalTabProps> = ({ active, index, onPress, title }) => {
  const onFilterPress = () => {
    onPress(index);
  };

  return (
    <FilterTabContainer active={active} onPress={onFilterPress}>
      <Text bold color="primary" fontSize={18}>
        {title}
      </Text>
    </FilterTabContainer>
  );
};

export default FilterModalTab;
