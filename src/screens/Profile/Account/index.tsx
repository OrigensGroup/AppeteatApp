import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import FavouriteCocktails from '../../../components/Profile/FavouriteCocktails';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';

import Text from '../../../components/shared/Text';

import useAuth from '../../../hooks/useAuth';

import theme from '../../../theme';

import { ProfileContainer, ImageContainer, NavigationContainer, NameContainer, Content, styles } from './styles';

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  const user = useAuth();

  return (
    <ProfileContainer>
      <LinearGradient
        colors={[theme.colors.active, theme.colors.secondaryActive]}
        end={{ x: 1, y: 0.4 }}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        <ImageContainer>
          <ProfileImage />
          <NameContainer>
            <Text color="primary" fontSize={20}>
              {user?.displayName}
            </Text>
          </NameContainer>
        </ImageContainer>
        <Content
          contentContainerStyle={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <NavigationContainer>
            <ProfileLink />
          </NavigationContainer>
          <FavouriteCocktails />
        </Content>
      </LinearGradient>
    </ProfileContainer>
  );
};

export default Account;
