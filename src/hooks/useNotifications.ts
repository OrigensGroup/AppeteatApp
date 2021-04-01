import { useContext } from 'react';

import { NotificationContext } from '../contexts/Notification';

const useNotifications = () => useContext(NotificationContext);

export default useNotifications;
