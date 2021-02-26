import React, { useState } from 'react';

import { MenuItem } from '../../types/MenuItem';

interface CartContext {
  cart: MenuItem[];
  addItemToCart: (item: MenuItem) => void;
  deleteItemFromCart: (item: string) => void;
}

export const CartContext = React.createContext<CartContext>({
  cart: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
});

interface CartProviderProps {}

const CartProvider: React.FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<MenuItem[]>([]);

  const addItemToCart = (item: MenuItem) => {
    setCart((oldCart) => [...oldCart, item]);
  };

  const deleteItemFromCart = (itemId: string) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== itemId));
  };

  //Update quantity, on setCart! +1 on press, and -1 on press with min value set to 1.

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
