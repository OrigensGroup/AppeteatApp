import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button } from './styles';

interface FilterProps {
  onClick: () => void;
}

const Filter: React.FunctionComponent<FilterProps> = ({ onClick }) => {
  return (
    <Button onPress={onClick}>
      <Icon color="#000000" name="sliders" size={24} />
    </Button>
  );
};

export default Filter;
