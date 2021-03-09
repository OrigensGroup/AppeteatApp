import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Region } from 'react-native-maps';

// import { mapStyle } from '../../../utils/mapstyle';

interface MapProps {
  initial: Region;
}

const Map: React.FunctionComponent<MapProps> = ({ initial }) => {
  return (
    <MapView
      followsUserLocation
      pitchEnabled={false}
      region={initial}
      rotateEnabled={false}
      scrollEnabled={false}
      showsUserLocation
      style={{ ...StyleSheet.absoluteFillObject, bottom: -30 }}
      zoomEnabled={false}
      //customMapStyle={mapStyle}
    />
  );
};

export default Map;
