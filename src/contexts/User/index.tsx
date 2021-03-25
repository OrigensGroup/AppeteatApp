import React, { useCallback, useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import { Booking } from '../../types/Booking';
import { MenuItem } from '../../types/MenuItem';
import { User } from '../../types/User';

import getUserData, { saveUserData } from '../../utils/manageUserdata';

interface UserContext {
  userData: User;
  addNewFavoriteCocktail: (item: MenuItem) => void;
  addBooking: (b: Booking) => void;
  restoreDefault: () => void;
}

export const UserContext = React.createContext<UserContext>({
  userData: { favoriteCocktails: [], bookings: [], default: false },
  addNewFavoriteCocktail: () => {},
  addBooking: () => {},
  restoreDefault: () => {},
});

interface UserProviderProps {}

const UserProvider: React.FunctionComponent<UserProviderProps> = ({ children }) => {
  const user = useAuth();
  const [userData, setUserData] = useState<User>({ favoriteCocktails: [], bookings: [], default: true });

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
    setUserData({ favoriteCocktails: [], bookings: [], default: true });
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

  return (
    <UserContext.Provider
      value={{
        userData,
        addNewFavoriteCocktail,
        addBooking,
        restoreDefault,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
