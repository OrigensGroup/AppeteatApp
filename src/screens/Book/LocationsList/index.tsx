import React, { Component, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import LocationCard from '../../../components/Home/PromotionItemCard';

import { mapStyle } from '../../../utils/mapstyle';

import useMarkers from './useMarkers';

const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

interface LocationsListProps {
  markers: Marker[];
}

const LocationsList: React.FunctionComponent<LocationsListProps> = () => {
  const mapRef = useRef<MapView>(null);
  const [animation] = useState(new Animated.Value(0));
  //@ts-ignore
  const timeoutRef = useRef<NodeJS.Timeout>(0);
  const [index, setIndex] = useState(0);
  const markers = useMarkers();
  const region = {
    latitude: 45.52220671242907,
    longitude: -122.6653281029795,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  };

  const interpolations = markers.map((_, index) => {
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
      if (index >= markers.length) {
        localIndex = markers.length - 1;
      }
      if (index <= 0) {
        localIndex = 0;
      }

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (index !== localIndex) {
          setIndex(index);
          const { coordinate } = markers[index];
          if (mapRef.current)
            mapRef.current.animateToRegion(
              {
                ...coordinate,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
              },
              350
            );
        }
      }, 10);
    });
  }, [animation]);

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} showsUserLocation style={styles.container} customMapStyle={mapStyle}>
        {markers.map((marker, index) => {
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
            <Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]} />
                <View style={styles.marker} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
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
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}
      >
        {markers.map((marker) => (
          <LocationCard item={marker} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

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
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#F69019',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F69019',
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#F69019',
  },
});

export default LocationsList;
