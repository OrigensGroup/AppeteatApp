import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Bar } from '../types/Bar';

export const BarContext = React.createContext<
  <T extends ValueOf<Bar>>(document: keyof Bar) => [T, (v: T | ((newV: T) => T)) => void]
  // @ts-ignore
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

  useEffect(() => {
    const barUnsubscribe = firestore()
      .collection('bar')
      .onSnapshot(async (bar) => {
        const loadedDocs = await Promise.all(
          bar.docs.map(
            async (doc): Promise<{ id: keyof Bar; data: ValueOf<Bar> }> => {
              const data = (await doc.data()) as ValueOf<Bar>;
              const id = doc.id as keyof Bar;

              return { id, data };
            },
          ),
        );

        const newBar = {} as Bar;

        loadedDocs.forEach((doc) => {
          // @ts-ignore
          newBar[doc.id] = doc.data;
        });
        setLocalBar(newBar);
      });

    // Stop listening for updates when no longer required
    return () => {
      barUnsubscribe();
    };
  }, []);

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

    // @ts-ignore
    return [localBar[document], updateDocument];
  };

  return (
    // @ts-ignore
    <BarContext.Provider value={getDocument}>{children}</BarContext.Provider>
  );
};

export default BarProvider;
