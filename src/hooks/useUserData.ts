import { useContext } from 'react';

import { UserContext } from '../contexts/User';

const useUserData = () => useContext(UserContext);

export default useUserData;
