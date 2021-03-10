import React from 'react';

import useAuth from '../../../hooks/useAuth';

import { ProfileImageContainer, AccountImage } from './styles';

interface ProfileImageProps {}

const ProfileImage: React.FunctionComponent<ProfileImageProps> = () => {
  const user = useAuth();
  return (
    <ProfileImageContainer>
      <AccountImage source={{ uri: user?.photoURL }} />
    </ProfileImageContainer>
  );
};

export default ProfileImage;
