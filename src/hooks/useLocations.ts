import { useContext } from 'react';

import { BarContext } from '../contexts/Bar';
import { Locations } from '../types/Bar';

const useLocations = () => {
  const bar = useContext(BarContext);

  return bar<Locations>('locations');
};

export default useLocations;
