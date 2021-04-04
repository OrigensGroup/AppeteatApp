import React, { useCallback, useEffect, useState } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import useNotifications from '../../hooks/useNotifications';
import { Booking } from '../../types/Booking';
import { MenuItem } from '../../types/MenuItem';
import { Order } from '../../types/Order';
import { User } from '../../types/User';

import getUserData, { saveUserData } from '../../utils/manageUserdata';
import { defaultUserdata } from '../../utils/initUserData';

interface UserContext {
  user: FirebaseAuthTypes.User | null;
  userData: User;
  addNewFavoriteCocktail: (item: MenuItem) => void;
  addBooking: (b: Booking) => void;
  addOrder: (order: Order) => void;
  restoreDefault: () => void;
  reload: () => void;
}

export const UserContext = React.createContext<UserContext>({
  user: null,
  userData: defaultUserdata,
  addNewFavoriteCocktail: () => {},
  addBooking: () => {},
  addOrder: () => {},
  restoreDefault: () => {},
  reload: () => {},
});

interface UserProviderProps {}

const UserProvider: React.FunctionComponent<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState(() => auth().currentUser);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
  }

  const reload = async () => {
    await auth().currentUser?.reload();
    const newUser = auth().currentUser;
    setUser(newUser);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const { token } = useNotifications();
  const [userData, setUserData] = useState<User>(defaultUserdata);

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

  useEffect(() => {
    if (userData.token !== token)
      setUserData((data) => ({
        ...data,
        token,
      }));
  }, [token, userData]);

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
        user,
        userData,
        addNewFavoriteCocktail,
        addBooking,
        addOrder,
        restoreDefault,
        reload,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
