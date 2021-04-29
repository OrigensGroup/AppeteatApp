import React, { useEffect, useState } from 'react';

import { Bar } from './types/Bar';

import CartProvider from './contexts/Cart';
import BarProvider from './contexts/Bar';
import UserProvider from './contexts/User';

import { barInit } from './utils/loadBar';
import { CustomTheme } from './components/shared/CustomTheme';
import { appClipLoading } from './utils/appClipLoading';
import AppClipNavigation from './components/shared/AppClipNavigation';

interface AppClipProps {}

const AppClip: React.FunctionComponent<AppClipProps> = () => {
  const [appReady, setAppReady] = useState(false);

  const [bar, setBar] = useState<Bar>(barInit);

  const initApp = async () => {
    const foundBar = await appClipLoading();
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
            <AppClipNavigation />
          </CustomTheme>
        </CartProvider>
      </UserProvider>
    </BarProvider>
  );
};

export default AppClip;
