import React, { useState } from 'react';

import { Locations } from '../../types/Bar';

interface LocationsContext {
  locations: Locations;
}

export const LocationsContext = React.createContext<LocationsContext>({
  locations: { list: [] },
});

interface LocationsProviderProps {
  loadedLocations: Locations;
}

const LocationsProvider: React.FunctionComponent<LocationsProviderProps> = ({ children, loadedLocations }) => {
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
