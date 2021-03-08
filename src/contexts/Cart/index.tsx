import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { OrderItem } from '../../types/OrderItem';
import { sub } from 'react-native-reanimated';

type Pricing = {
  subtotal: number;
  servicefee: number;
  tip: number;
  total: number;
};

type AddItem = Omit<OrderItem, 'orderItemId'>;
interface CartContext {
  cart: OrderItem[];
  addItemToCart: (item: AddItem) => void;
  deleteItemFromCart: (item: string) => void;
  updateItemQuantity: (item: OrderItem, amount: number) => void;
  pricing: Pricing;
  addTips: (amount: number) => void;
}

export const CartContext = React.createContext<CartContext>({
  cart: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  updateItemQuantity: () => {},
  pricing: {
    servicefee: 0,
    subtotal: 0,
    tip: 0,
    total: 0,
  },
  addTips: () => {},
});

interface CartProviderProps {}

export const fixDecimals = (n: number) => Math.round(n * 100) / 100;
const CartProvider: React.FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [pricing, setPricing] = useState<Pricing>({
    servicefee: 0,
    subtotal: 0,
    tip: 0,
    total: 0,
  });

  const addItemToCart = (item: AddItem) => {
    setCart((oldCart) => [...oldCart, { ...item, orderItemId: v4() }]);
  };

  const deleteItemFromCart = (itemId: string) => {
    setCart((oldCart) => oldCart.filter((item) => item.orderItemId !== itemId));
  };

  //Update quantity, on setCart! +1 on press, and -1 on press with min value set to 1.
  const updateItemQuantity = (newItem: OrderItem, amount: number) => {
    setCart((oldCart) =>
      oldCart.map((item) => (newItem.orderItemId === item.orderItemId ? { ...item, quantity: amount } : item))
    );
  };

  useEffect(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const serviceCharge = Math.round(subtotal * 0.125 * 100) / 100;

    const totalPlusCharge = subtotal + serviceCharge;

    setPricing((oldPricing) => ({
      ...oldPricing,
      subtotal: fixDecimals(subtotal),
      total: fixDecimals(totalPlusCharge + oldPricing.tip),
      servicefee: fixDecimals(serviceCharge),
    }));
  }, [cart]);

  const addTips = (amount: number) => {
    setPricing((oldPricing) => ({
      ...oldPricing,
      tip: fixDecimals(amount),
      total: fixDecimals(oldPricing.servicefee + oldPricing.subtotal + amount),
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        updateItemQuantity,
        pricing,
        addTips,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
