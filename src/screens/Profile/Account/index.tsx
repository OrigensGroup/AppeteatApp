import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from 'styled-components';

import FavouriteCocktails from '../../../components/Profile/FavouriteCocktails';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';

import Text from '../../../components/shared/Text';

import useAuth from '../../../hooks/useAuth';

import {
  ProfileContainer,
  ImageContainer,
  NavigationContainer,
  NameContainer,
  Content,
  styles,
  SafeArea,
} from './styles';

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  const theme = useTheme();
  const user = useAuth();

  return (
    <ProfileContainer>
      <LinearGradient
        colors={[theme.colors.active, theme.colors.secondaryActive]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        <SafeArea>
          <ImageContainer>
            <ProfileImage />
            <NameContainer>
              <Text color="fixedWhite" fontSize={20}>
                {user?.displayName}
              </Text>
            </NameContainer>
          </ImageContainer>
          <Content
            contentContainerStyle={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <NavigationContainer>
              <ProfileLink />
            </NavigationContainer>
            <FavouriteCocktails />
          </Content>
        </SafeArea>
      </LinearGradient>
    </ProfileContainer>
  );
};

export default Account;
