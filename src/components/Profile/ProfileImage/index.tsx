import React from 'react';

import { ProfileImageContainer, AccountImage } from './styles';

interface ProfileImageProps {
  imageUrl?: string;
}

const ProfileImage: React.FunctionComponent<ProfileImageProps> = ({}) => {
  return (
    <ProfileImageContainer>
      <AccountImage source={require('../../../img/alex.jpg')} />
    </ProfileImageContainer>
  );
};

export default ProfileImage;
