import React, { useCallback, useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import { Booking } from '../../types/Booking';
import { MenuItem } from '../../types/MenuItem';
import { Order } from '../../types/Order';
import { User } from '../../types/User';

import getUserData, { saveUserData } from '../../utils/manageUserdata';

interface UserContext {
  userData: User;
  addNewFavoriteCocktail: (item: MenuItem) => void;
  addBooking: (b: Booking) => void;
  addOrder: (order: Order) => void;
  restoreDefault: () => void;
}

export const UserContext = React.createContext<UserContext>({
  userData: { favoriteCocktails: [], bookings: [], default: false, orders: [] },
  addNewFavoriteCocktail: () => {},
  addBooking: () => {},
  addOrder: () => {},
  restoreDefault: () => {},
});

interface UserProviderProps {}

const UserProvider: React.FunctionComponent<UserProviderProps> = ({ children }) => {
  const user = useAuth();
  const [userData, setUserData] = useState<User>({ favoriteCocktails: [], orders: [], bookings: [], default: true });

  const loadData = useCallback(async () => {
    if (user) {
      const data = await getUserData(user.uid);
      setUserData(data);
    }
  }, [user, setUserData]);

  const saveData = useCallback(async () => {
    if (user && !userData.default) {
      await saveUserData(user.uid, userData);
    }
  }, [user, userData]);

  const restoreDefault = () => {
    setUserData({ favoriteCocktails: [], orders: [], bookings: [], default: true });
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    saveData();
  }, [userData, saveData]);

  const addNewFavoriteCocktail = (item: MenuItem) => {
    const newItems = !userData.favoriteCocktails.includes(item.id)
      ? [...userData.favoriteCocktails, item.id]
      : userData.favoriteCocktails.filter((cocktail) => cocktail !== item.id);

    setUserData((data) => ({
      ...data,
      favoriteCocktails: newItems,
    }));
  };

  const addBooking = (booking: Booking) => {
    setUserData((data) => ({
      ...data,
      bookings: [booking, ...data.bookings],
    }));
  };

  const addOrder = (order: Order) => {
    setUserData((data) => ({
      ...data,
      orders: [order, ...data.orders],
    }));
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        addNewFavoriteCocktail,
        addBooking,
        addOrder,
        restoreDefault,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
