import React, { Component, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import LocationCard from '../../../components/Book/LocationCard';
import useLocations from '../../../hooks/useLocations';

import { mapStyle } from '../../../utils/mapstyle';
import BookATableModal from '../BookATableModal';


const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

interface LocationsListProps {
  venues: Marker[];
}

const LocationsList: React.FunctionComponent<LocationsListProps> = () => {

  const { locations } = useLocations();
  const venues = locations.list;

  const mapRef = useRef<MapView>(null);
  const [animation] = useState(new Animated.Value(0));
  //@ts-ignore
  const timeoutRef = useRef<NodeJS.Timeout>(0);
  const [index, setIndex] = useState(0);
  const region = {
    latitude: -0.128955,
    longitude: 51.492889,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
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
  }, [animation]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [venueToBook, setVenueToBook] = useState({});

  const toggleModal = (venue: any) => () => {
    setVenueToBook(venue);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BookATableModal isModalVisible={isModalVisible} venue={venueToBook} onClose={closeModal} />
      <MapView region={region} ref={mapRef} showsUserLocation style={styles.container} customMapStyle={mapStyle}>
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
            <Marker key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}}>
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
        {venues.map((marker) => (
          <LocationCard onClick={toggleModal} venue={marker} />
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
