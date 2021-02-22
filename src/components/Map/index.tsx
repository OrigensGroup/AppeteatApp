import React from 'react';
import MapView from 'react-native-maps';

import { MapContainer } from './styles';

interface MapProps {
  onClick?: () => void;
}

const Map: React.FunctionComponent<MapProps> = ({ onClick }) => {
  return (
    <MapContainer onPress={onClick}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </MapContainer>
  );
};

export default Map;
