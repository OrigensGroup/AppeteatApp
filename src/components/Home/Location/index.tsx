import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LocationContainer, CardTitle, LocationWrap } from './styles';

interface LocationProps {
  onClick?: () => void;
}

const Location: React.FunctionComponent<LocationProps> = ({ onClick }) => {
  return (
    <LocationWrap>
      <CardTitle>Find us</CardTitle>
      <LocationContainer onPress={onClick}>
        <Ionicons color="#000000" name="earth-outline" size={50} />
      </LocationContainer>
    </LocationWrap>
  );
};

export default Location;
