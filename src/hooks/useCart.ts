import { useContext } from 'react';

import { CartContext } from '../contexts/Cart';

const useCart = () => useContext(CartContext);

export default useCart;
