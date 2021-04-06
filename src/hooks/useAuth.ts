import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(() => auth().currentUser);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
  }

  const updateUser = (name: string) => {
    let newUser = auth().currentUser;

    if (newUser) {
      newUser = { ...newUser, displayName: name };
    }

    setUser((oldUser) => ({ ...oldUser, ...newUser }));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return { user, updateUser };
};

export default useAuth;
