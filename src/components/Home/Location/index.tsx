import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { LocationContainer, CardTitle, LocationWrap } from './styles';

interface LocationProps {
  onClick?: () => void;
}

const Location: React.FunctionComponent<LocationProps> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <LocationWrap>
      <CardTitle>Find us</CardTitle>
      <LocationContainer onPress={onClick}>
        <Ionicons color={theme.colors.textPrimary} name="earth-outline" size={50} />
      </LocationContainer>
    </LocationWrap>
  );
};

export default Location;
