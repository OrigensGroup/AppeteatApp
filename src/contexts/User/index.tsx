import React, { useCallback, useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import { MenuItem } from '../../types/MenuItem';
import { User } from '../../types/User';

import getUserData, { saveUserData } from '../../utils/manageUserdata';

interface UserContext {
  userData: User;
  addNewFavoriteCocktail: (item: MenuItem) => void;
}

export const UserContext = React.createContext<UserContext>({
  userData: { favoriteCocktails: [], default: false },
  addNewFavoriteCocktail: () => {},
});

interface UserProviderProps {}

const UserProvider: React.FunctionComponent<UserProviderProps> = ({ children }) => {
  const user = useAuth();
  const [userData, setUserData] = useState<User>({ favoriteCocktails: [], default: true });

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

  return (
    <UserContext.Provider
      value={{
        userData,
        addNewFavoriteCocktail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
