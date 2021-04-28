import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from 'styled-components';

import FavouriteCocktails from '../../../components/Profile/FavouriteCocktails';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';

import Text from '../../../components/shared/Text';
import useUserData from '../../../hooks/useUserData';

import LoginModal from '../../../components/shared/LoginModal';

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
  const { user } = useUserData();
  const navigation = useNavigation();

  const [loginModalData, setLoginModalData] = useState({
    show: false,
  });

  const hideLoginModal = () => {
    setLoginModalData((old) => ({
      ...old,
      show: false,
    }));
  };

  const closeLoginModal = () => {
    hideLoginModal();
    navigation.navigate('App', { screen: 'Home' });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const user = auth().currentUser;

      if (user && user.isAnonymous) {
        setLoginModalData((old) => ({
          ...old,
          show: true,
        }));
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ProfileContainer>
      <LinearGradient
        colors={[theme.colors.active, theme.colors.secondaryActive]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        <SafeArea>
          <LoginModal isModalVisible={loginModalData.show} onClose={closeLoginModal} onConfirm={hideLoginModal} />
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
