import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  FilterButtonContainer,
  Button,
  IconWrapper
} from './styles';

interface FilterProps {
  onClick: () => void;
}

const Filter: React.FunctionComponent<FilterProps> = ( {onClick} ) => {
  return (
    <FilterButtonContainer>
      <Button onPress={onClick}>
        <Icon name='ios-filter' size={28} color='#0008'/>
      </Button>
    </FilterButtonContainer>
  );
};

export default Filter;
