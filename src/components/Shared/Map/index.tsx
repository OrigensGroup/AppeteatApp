import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import MapView, { Region } from 'react-native-maps';

import useSettings from '../../../hooks/useSettings';

import { mapStyle } from '../../../utils/mapstyle';

interface MapProps {
  initial: Region;
}

const Map: React.FunctionComponent<MapProps> = ({ initial }) => {
  const [settings] = useSettings();
  const mode = useColorScheme();

  return (
    <MapView
      customMapStyle={settings.features.FEAT_DARK_MODE && mode === 'dark' ? mapStyle : undefined}
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
