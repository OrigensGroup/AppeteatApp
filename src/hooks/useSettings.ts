import { useContext } from 'react';

import { BarContext } from '../contexts/Bar';

import { Settings } from '../types/Bar';

const useSettings = () => {
  const bar = useContext(BarContext);

  return bar<Settings>('settings');
};

export default useSettings;
