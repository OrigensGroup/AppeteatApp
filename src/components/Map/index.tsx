import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import { mapStyle } from '../../utils/mapstyle';

interface MapProps {}

const Map: React.FunctionComponent<MapProps> = ({}) => {
  return (
    <MapView
      style={{ ...StyleSheet.absoluteFillObject, bottom: -30 }}
      showsUserLocation={true}
      pitchEnabled={false}
      rotateEnabled={false}
      zoomEnabled={false}
      scrollEnabled={false}
      customMapStyle={mapStyle}
    />
  );
};

export default Map;
