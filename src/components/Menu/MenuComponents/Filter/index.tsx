import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FilterButtonContainer, Button } from './styles';

interface FilterProps {
  onClick: () => void;
}

const Filter: React.FunctionComponent<FilterProps> = ({ onClick }) => {
  return (
    <FilterButtonContainer>
      <Button onPress={onClick}>
        <Icon color="#0008" name="sliders" size={24} />
      </Button>
    </FilterButtonContainer>
  );
};

export default Filter;
