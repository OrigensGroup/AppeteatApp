import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Map from '../../Map';
import Text from '../../Shared/Text';

import homeTranslations from '../../../translations/home';

import { LocationContainer, FindButton, MapContainer } from './styles';

interface ShowLocationsProps {}

const ShowLocations: React.FunctionComponent<ShowLocationsProps> = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('Book');
  };

  return (
    <LocationContainer onPress={navigate}>
      <MapContainer>
        <Map
          initial={{
            latitude: 51.51085,
            longitude: -0.13401,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <FindButton>
          <Text fontSize={18} color="primary">
            {homeTranslations.showLocations.cta}
          </Text>
        </FindButton>
      </MapContainer>
    </LocationContainer>
  );
};

export default ShowLocations;
