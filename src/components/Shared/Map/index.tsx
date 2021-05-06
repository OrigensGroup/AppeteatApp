import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import MapView, { Region } from 'react-native-maps';

import useSettings from '../../../hooks/useSettings';

interface MapProps {
  initial: Region;
}

const Map: React.FunctionComponent<MapProps> = ({ initial }) => {
  const [settings] = useSettings();
  const mode = useColorScheme();

  return (
    <MapView
      pitchEnabled={false}
      region={initial}
      rotateEnabled={false}
      scrollEnabled={false}
      showsUserLocation
      style={{ ...StyleSheet.absoluteFillObject, bottom: -30 }}
      zoomEnabled={false}
    />
  );
};

export default Map;
