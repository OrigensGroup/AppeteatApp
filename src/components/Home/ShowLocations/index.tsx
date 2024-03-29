import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Appearance, Pressable } from 'react-native';

import Map from '../../shared/Map';
import Text from '../../shared/Text';

import useLocations from '../../../hooks/useLocations';

import { LocationContainer, FindButton, MapContainer } from './styles';
import { t } from '../../../translations';

interface ShowLocationsProps {
  secondary?: boolean;
}

const ShowLocations: React.FunctionComponent<ShowLocationsProps> = () => {
  const [locations] = useLocations();
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('Book');
  };

  return (
    <Pressable onPress={navigate}>
      <LocationContainer>
        <MapContainer>
          <Map initial={locations.list[0]} />
          <FindButton secondary={Appearance.getColorScheme() === 'dark'}>
            <Text color="fixedBlack" fontSize={18}>
              {t('homeTranslations.homePage.showLocations.cta')}
            </Text>
          </FindButton>
        </MapContainer>
      </LocationContainer>
    </Pressable>
  );
};

export default ShowLocations;
