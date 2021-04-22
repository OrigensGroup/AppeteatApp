import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { useTheme } from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth';

import MapView, { Marker } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';

import BookATableModal from '../../../components/Book/BookATableModal';
import LocationCard from '../../../components/Book/LocationCard';
import LoginModal from '../../../components/shared/LoginModal';
import useLocations from '../../../hooks/useLocations';
import { Venue } from '../../../types/Venue';

const CARD_WIDTH = 240;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  ring: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    bottom: 26,
  },
});

const LocationLists: React.FunctionComponent = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const mapRef = useRef<MapView>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [locations] = useLocations();

  const [locationIndex, setLocationIndex] = useState(0);
  const [animation] = useState(new Animated.Value(0));
  const [isModalVisible, setModalVisible] = useState(false);

  const [loginModalData, setLoginModalData] = useState({
    show: false,
  });

  const hideLoginModal = () => {
    setLoginModalData((old) => ({
      ...old,
      show: false,
    }));
  };

  const closeLoginModal = () => {
    hideLoginModal();
    navigation.navigate('App', { screen: 'Home' });
  };

  const markers = locations.list;

  const firstVenue = markers[0];

  const [venueToBook, setVenueToBook] = useState<Venue | undefined>(firstVenue);

  const region = firstVenue;

  const toggleModal = (venue: Venue) => () => {
    setVenueToBook(venue);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
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
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item

      if (index >= markers.length) {
        index = markers.length - 1;
      }

      if (index <= 0) {
        index = 0;
      }

      if (locationIndex !== index) setLocationIndex(index);

      timeoutRef.current && clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        if (locationIndex !== index) {
          const { latitude, longitude } = markers[index];

          mapRef?.current?.animateToRegion(
            {
              latitude,
              longitude,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            250,
          );
        }
      }, 10);
    });

    return () => {
      animation.removeAllListeners();
    };
  }, [animation, locationIndex, markers, region.latitudeDelta, region.longitudeDelta]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const user = auth().currentUser;

      if (user && user.isAnonymous) {
        setLoginModalData((old) => ({
          ...old,
          show: true,
        }));
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LoginModal isModalVisible={loginModalData.show} onClose={closeLoginModal} onConfirm={hideLoginModal} />
      <BookATableModal isModalVisible={isModalVisible} onClose={closeModal} venue={venueToBook} />
      <MapView initialRegion={region} ref={mapRef} style={styles.container}>
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
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              key={index}
            >
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[{ backgroundColor: theme.colors.active }, styles.ring, scaleStyle]}>
                  <MaterialCommunityIcons
                    name="silverware-variant"
                    color={theme.colors.backgroundColor}
                    size={12}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 1,
                      padding: 0,
                    }}
                  />
                </Animated.View>
                <View style={[styles.marker, { backgroundColor: theme.colors.active }]} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
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
          { useNativeDriver: true },
        )}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        style={styles.scrollView}
      >
        {markers.map((marker) => (
          <LocationCard key={marker.id} onClick={toggleModal} venue={marker} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default LocationLists;
