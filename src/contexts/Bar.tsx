import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Bar } from '../types/Bar';

export const BarContext = React.createContext<
  <T extends ValueOf<Bar>>(document: keyof Bar) => [T, (v: T | ((newV: T) => T)) => void]
  //@ts-ignore
>(() => [{}, () => {}]);

type ValueOf<T> = T[keyof T];

interface BarProviderProps {
  loadedBar: Bar;
}

const BarProvider: React.FunctionComponent<BarProviderProps> = ({ children, loadedBar }) => {
  const [localBar, setLocalBar] = useState<Bar>(loadedBar);

  useEffect(() => {
    setLocalBar(loadedBar);
  }, [loadedBar]);

  const getDocument = <T extends ValueOf<Bar>>(document: keyof Bar): [T, (v: T) => void] => {
    const updateDocument = async (value: T | ((callback: T) => T)) => {
      let result = value;

      if (typeof value === 'function') {
        result = value(localBar[document] as T);
      }

      setLocalBar((oldBarData) => ({
        ...oldBarData,
        [document]: result,
      }));

      await firestore().collection('bar').doc(document).set(result);
    };

    //@ts-ignore
    return [localBar[document], updateDocument];
  };

  return (
    //@ts-ignore
    <BarContext.Provider value={getDocument}>{children}</BarContext.Provider>
  );
};

export default BarProvider;
