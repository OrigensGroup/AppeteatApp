import React, { useState } from 'react';

import { Homepage, Locations } from '../../types/Bar';

interface LocationsContext {
  locations: Locations;
  homepage: Homepage;
}

export const LocationsContext = React.createContext<LocationsContext>({
  locations: { list: [] },
  homepage: { sections: [] },
});

interface LocationsProviderProps {
  loadedLocations: Locations;
  loadedHomepage: Homepage;
}

const LocationsProvider: React.FunctionComponent<LocationsProviderProps> = ({
  children,
  loadedHomepage,
  loadedLocations,
}) => {
  const [locations] = useState<Locations>(loadedLocations);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        homepage: loadedHomepage,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
