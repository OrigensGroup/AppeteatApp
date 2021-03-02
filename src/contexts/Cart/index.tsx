import React, { useState } from 'react';

import { OrderItem } from '../../types/OrderItem';

interface CartContext {
  cart: OrderItem[];
  addItemToCart: (item: OrderItem) => void;
  deleteItemFromCart: (item: string) => void;
  updateItemQuantity: (item: OrderItem, amount: number) => void;
}

export const CartContext = React.createContext<CartContext>({
  cart: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  updateItemQuantity: () => {},
});

interface CartProviderProps {}

const CartProvider: React.FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<OrderItem[]>([]);

  const addItemToCart = (item: OrderItem) => {
    setCart((oldCart) => [...oldCart, item]);
  };

  const deleteItemFromCart = (itemId: string) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== itemId));
  };

  //Update quantity, on setCart! +1 on press, and -1 on press with min value set to 1.
  const updateItemQuantity = (newItem: OrderItem, amount: number) => {
    setCart((oldCart) => oldCart.map((item) => (newItem.id === item.id ? { ...item, quantity: amount } : item)));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
