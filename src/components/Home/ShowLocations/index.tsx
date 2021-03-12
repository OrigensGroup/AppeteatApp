import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Appearance } from 'react-native';

import Map from '../../shared/Map';
import Text from '../../shared/Text';

import homeTranslations from '../../../translations/home';

import { LocationContainer, FindButton, MapContainer } from './styles';

interface ShowLocationsProps {
  secondary?: boolean;
}

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
        {Appearance.getColorScheme() === 'dark' ? (
          <FindButton secondary>
            <Text color="fixedBlack" fontSize={18}>
              {homeTranslations.showLocations.cta}
            </Text>
          </FindButton>
        ) : (
          <FindButton secondary={false}>
            <Text color="fixedBlack" fontSize={18}>
              {homeTranslations.showLocations.cta}
            </Text>
          </FindButton>
        )}
      </MapContainer>
    </LocationContainer>
  );
};

export default ShowLocations;
