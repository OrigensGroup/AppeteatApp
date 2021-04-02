import React from 'react';

import useUserData from '../../../hooks/useUserData';

import Text from '../../shared/Text';

import { ProfileImageContainer, AccountImageBackground } from './styles';

interface ProfileImageProps {}

const ProfileImage: React.FunctionComponent<ProfileImageProps> = () => {
  const { user } = useUserData();
  return (
    <ProfileImageContainer>
      {/* <AccountImage source={{ uri: user?.photoURL }} /> */}
      {user && (
        <AccountImageBackground>
          <Text color="fixedWhite" fontSize={24}>
            {user.displayName?.charAt(0)}
          </Text>
        </AccountImageBackground>
      )}
    </ProfileImageContainer>
  );
};

export default ProfileImage;
