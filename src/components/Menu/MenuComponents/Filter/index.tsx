import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { FilterButtonContainer, Button } from './styles';

interface FilterProps {
  onClick: () => void;
}

const Filter: React.FunctionComponent<FilterProps> = ({ onClick }) => {
  return (
    <FilterButtonContainer>
      <Button onPress={onClick}>
        <Icon color="#0008" name="ios-filter" size={28} />
      </Button>
    </FilterButtonContainer>
  );
};

export default Filter;
