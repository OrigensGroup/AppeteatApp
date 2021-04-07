import React, { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';

import { registerForPushNotificationsAsync } from '../../utils/Notifications';

interface NotificationContext {
  token: string | undefined;
  notification: Notifications.Notification | false;
}

export const NotificationContext = React.createContext<NotificationContext>({
  token: '',
  notification: false,
});

interface NotificationProviderProps {}

const NotificationProvider: React.FunctionComponent<NotificationProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<Notifications.Notification | false>(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setToken(token));

    const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        token,
        notification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
