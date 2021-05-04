import 'react-native-get-random-values';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { OrderItem } from '../../types/OrderItem';
import { calculateItemPrice, fixDecimals } from '../../utils/priceCalculations';
import useSettings from '../../hooks/useSettings';

export type Pricing = {
  subtotal: number;
  servicefee: number;
  tip: number;
  deliveryFee: number;
  totalWithServiceFee: number;
  total: number;
  checkoutType: 'eatin' | 'delivery' | 'takeaway';
};

type AddItem = Omit<OrderItem, 'orderItemId'>;
interface CartContext {
  cart: OrderItem[];
  addItemToCart: (item: AddItem) => void;
  deleteItemFromCart: (item: string) => void;
  updateItemQuantity: (item: OrderItem, amount: number) => void;
  pricing: Pricing;
  addTips: (amount: number) => void;
  clearCart: () => void;
  setPricingType: (p: 'eatin' | 'delivery' | 'takeaway') => void;
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
    totalWithServiceFee: 0,
    total: 0,
    deliveryFee: 0,
    checkoutType: 'eatin',
  },
  addTips: () => {},
  clearCart: () => {},
  setPricingType: () => {},
});

interface CartProviderProps {}

const CartProvider: React.FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [settings] = useSettings();

  const [pricing, setPricing] = useState<Pricing>({
    servicefee: 0,
    subtotal: 0,
    tip: 0,
    deliveryFee: 0,
    totalWithServiceFee: 0,
    total: 0,
    checkoutType: 'eatin',
  });

  const addItemToCart = (newItem: AddItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { quantity, ...itemKeys } = newItem;
    if (cart.length > 0) {
      let counter = 0;
      cart.forEach((item: OrderItem) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { orderItemId, quantity, ...oldItemKeys } = item;
        if (JSON.stringify(oldItemKeys) === JSON.stringify(itemKeys)) {
          updateItemQuantity(item, newItem.quantity + item.quantity);
          counter++;
        }
      });
      if (counter === 0) {
        setCart((oldCart) => [...oldCart, { ...newItem, orderItemId: v4() }]);
      }
    } else {
      setCart((oldCart) => [...oldCart, { ...newItem, orderItemId: v4() }]);
    }
  };

  const deleteItemFromCart = (itemId: string) => {
    setCart((oldCart) => oldCart.filter((item) => item.orderItemId !== itemId));
  };

  // Update quantity, on setCart! +1 on press, and -1 on press with min value set to 1.
  const updateItemQuantity = (newItem: OrderItem, amount: number) => {
    setCart((oldCart) =>
      oldCart.map((item) => (newItem.orderItemId === item.orderItemId ? { ...item, quantity: amount } : item)),
    );
  };

  useEffect(() => {
    const subtotal = cart.reduce((acc, item) => acc + calculateItemPrice(item), 0);

    const serviceCharge = Math.round(subtotal * 0.125 * 100) / 100;

    setPricing((oldPricing) => {
      const totalPlusCharge =
        subtotal +
        oldPricing.tip +
        (oldPricing.checkoutType === 'eatin'
          ? serviceCharge
          : oldPricing.checkoutType === 'delivery'
          ? oldPricing.deliveryFee
          : 0);

      return {
        ...oldPricing,
        subtotal: fixDecimals(subtotal),
        total: fixDecimals(totalPlusCharge),
        servicefee: fixDecimals(serviceCharge),
      };
    });
  }, [cart, settings, pricing.checkoutType]);

  const addTips = (amount: number) => {
    setPricing((oldPricing) => ({
      ...oldPricing,
      tip: fixDecimals(amount),
      totalWithServiceFee: fixDecimals(oldPricing.servicefee + oldPricing.subtotal + amount),
      total: fixDecimals(oldPricing.subtotal + amount),
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (settings.deliverySettings.fee) {
      setPricing((oldPricing) => ({
        ...oldPricing,
        deliveryFee: settings.deliverySettings.fee,
      }));
    }
  }, [settings]);

  const setPricingType = (type: 'eatin' | 'delivery' | 'takeaway') => {
    setPricing((oldPricing) => ({
      ...oldPricing,
      checkoutType: type,
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
        clearCart,
        setPricingType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
