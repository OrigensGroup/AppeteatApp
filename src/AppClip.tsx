import React, { useEffect, useState } from 'react';

import { Bar } from './types/Bar';

import CartProvider from './contexts/Cart';
import BarProvider from './contexts/Bar';
import UserProvider from './contexts/User';

import { barInit } from './utils/loadBar';
import { CustomTheme } from './components/shared/CustomTheme';
import { loadStuff } from './utils/loadApp';
import AppNavigation from './components/shared/AppNavigation';

interface AppClipProps {}

const AppClip: React.FunctionComponent<AppClipProps> = () => {
  const [appReady, setAppReady] = useState(false);

  const [bar, setBar] = useState<Bar>(barInit);

  const initApp = async () => {
    const foundBar = await loadStuff();
    setBar(foundBar);
  };

  useEffect(() => {
    const load = async () => {
      await initApp();
    };

    load().then(() => setAppReady(true));
  }, []);

  if (!appReady) {
    return <></>;
  }

  return (
    <BarProvider loadedBar={bar}>
      <UserProvider>
        <CartProvider>
          <CustomTheme>
            <AppNavigation />
          </CustomTheme>
        </CartProvider>
      </UserProvider>
    </BarProvider>
  );
};

export default AppClip;
