import { useContext } from 'react';

import { MenuContext } from '../contexts/Menu';

const useMenu = () => useContext(MenuContext);

export default useMenu;
