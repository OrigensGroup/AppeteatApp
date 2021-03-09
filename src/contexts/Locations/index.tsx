import React, { useEffect, useState } from 'react';

import { Venue } from '../../types/Venue';

export interface Locations {
  list: Venue[];
}

interface LocationsContext {
  locations: Locations;
}

export const LocationsContext = React.createContext<LocationsContext>({
  locations: { list: [] },
});

interface LocationsProviderProps {
  loadedLocations: Locations;
}

const LocationsProvider: React.FunctionComponent<LocationsProviderProps> = ({ loadedLocations, children }) => {
  const [locations] = useState<Locations>(loadedLocations);

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
