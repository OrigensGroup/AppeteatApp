import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Region } from 'react-native-maps';

import { mapStyle } from '../../utils/mapstyle';

interface MapProps {
  initial: Region;
}

const Map: React.FunctionComponent<MapProps> = ({ initial }) => {
  return (
    <MapView
      style={{ ...StyleSheet.absoluteFillObject, bottom: -30 }}
      showsUserLocation
      followsUserLocation
      pitchEnabled={false}
      rotateEnabled={false}
      zoomEnabled={false}
      scrollEnabled={false}
      region={initial}
      //customMapStyle={mapStyle}
    />
  );
};

export default Map;
