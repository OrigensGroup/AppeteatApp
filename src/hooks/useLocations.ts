import { useContext } from 'react';

import { LocationsContext } from '../contexts/Locations';

const useLocations = () => useContext(LocationsContext);

export default useLocations;
