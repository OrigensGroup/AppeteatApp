import { useContext } from 'react';

import { BarContext } from '../contexts/Bar';

import { Homepage } from '../types/Bar';

const useHomepage = () => {
  const bar = useContext(BarContext);

  return bar<Homepage>('homepage');
};

export default useHomepage;
