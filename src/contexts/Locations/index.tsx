import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Venue } from '../../types/Venue';

interface Locations {
  list: Venue[];
}

interface LocationsContext {
  locations: Locations;
}

export const LocationsContext = React.createContext<LocationsContext>({
  locations: { list: []},
});

interface LocationsProviderProps {}

const LocationsProvider: React.FunctionComponent<LocationsProviderProps> = ({ children }) => {
  const [locations, setLocations] = useState<Locations>({ list: [], });

  const getLocations = async () => {
    const firebaseLocations = (await (await firestore().collection('bar').doc('locations').get()).data()) as Locations;
    
    console.log(firebaseLocations);
    setLocations(firebaseLocations);
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <LocationsContext.Provider
      value={{
        locations,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
