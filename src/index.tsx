import React, { useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';

import crashlytics from '@react-native-firebase/crashlytics';

import { Bar } from './types/Bar';

import CartProvider from './contexts/Cart';
import BarProvider from './contexts/Bar';
import UserProvider from './contexts/User';

import { barInit } from './utils/loadBar';
import NotificationProvider from './contexts/Notification';
import { CustomTheme } from './components/shared/CustomTheme';
import { loadStuff } from './utils/loadApp';
import AppNavigation from './components/shared/AppNavigation';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  const [bar, setBar] = useState<Bar>(barInit);

  const initApp = async () => {
    const foundBar = await loadStuff();
    setBar(foundBar);
    setAppReady(true);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    crashlytics().log('App mounted.');
    SplashScreen.preventAutoHideAsync();
    initApp();
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <BarProvider loadedBar={bar}>
      <NotificationProvider>
        <UserProvider>
          <CartProvider>
            <CustomTheme>
              <AppNavigation />
            </CustomTheme>
          </CartProvider>
        </UserProvider>
      </NotificationProvider>
    </BarProvider>
  );
};

export default App;
