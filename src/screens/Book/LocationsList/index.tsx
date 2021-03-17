import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Dimensions, useColorScheme } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import LocationCard from '../../../components/Book/LocationCard';
import useLocations from '../../../hooks/useLocations';

import { mapStyle } from '../../../utils/mapstyle';
import BookATableModal from '../../../components/Book/BookATableModal';
import theme from '../../../theme';

const { height } = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

interface LocationsListProps {
  venues: Marker[];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {},
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 7.5,
    backgroundColor: theme.colors.active,
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.active,
    position: 'absolute',
    borderWidth: 1,
    borderColor: theme.colors.active,
  },
});

const LocationsList: React.FunctionComponent<LocationsListProps> = () => {
  const mode = useColorScheme();
  const mapRef = useRef<MapView>(null);
  const [animation] = useState(new Animated.Value(0));
  const [isModalVisible, setModalVisible] = useState(false);
  const [venueToBook, setVenueToBook] = useState({});
  const [index, setIndex] = useState(0);

  const { locations } = useLocations();
  const venues = locations.list;

  //@ts-ignore
  const timeoutRef = useRef<NodeJS.Timeout>(0);

  const region = {
    ...venues[0],
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const interpolations = venues.map((_, index) => {
    const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];

    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: 'clamp',
    });

    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: 'clamp',
    });

    return { scale, opacity };
  });

  useEffect(() => {
    animation.addListener(({ value }) => {
      let localIndex = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item

      if (index >= venues.length) {
        localIndex = venues.length - 1;
      }

      if (index <= 0) {
        localIndex = 0;
      }

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        if (index !== localIndex) {
          setIndex(index);
          const { latitude, longitude } = venues[index];
          if (mapRef.current)
            mapRef.current.animateToRegion(
              {
                latitude,
                longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
              },
              350
            );
        }
      }, 10);
    });
  }, [animation, index, region.latitudeDelta, region.longitudeDelta, venues]);

  const toggleModal = (venue: any) => () => {
    setVenueToBook(venue);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BookATableModal isModalVisible={isModalVisible} onClose={closeModal} venue={venueToBook} />
      <MapView
        customMapStyle={mode === 'dark' ? mapStyle : undefined}
        ref={mapRef}
        region={region}
        showsUserLocation
        style={styles.container}
      >
        {venues.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };

          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };

          return (
            <Marker coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} key={index}>
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]} />
                <View style={styles.marker} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        contentContainerStyle={styles.endPadding}
        horizontal
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        style={styles.scrollView}
      >
        {venues.map((marker) => (
          <LocationCard key={marker.id} onClick={toggleModal} venue={marker} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default LocationsList;
