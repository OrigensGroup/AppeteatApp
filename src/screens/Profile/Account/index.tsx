import React from 'react';

import { Text } from 'react-native';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';

import { ProfileContainer, ImageContainer, NavigationContainer } from './styles';

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <ProfileImage />
        <Text>Alessandro Carpanzano</Text>
      </ImageContainer>
      <NavigationContainer>
        <ProfileLink />
      </NavigationContainer>
    </ProfileContainer>
  );
};

export default Account;
