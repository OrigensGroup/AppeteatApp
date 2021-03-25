import { useContext } from 'react';

import { BarContext } from '../contexts/Bar';
import { Menu } from '../types/Bar';

const useMenu = () => {
  const bar = useContext(BarContext);

  return bar<Menu>('menu');
};

export default useMenu;
