import React from 'react';

import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';
import Card from '../../../components/Profile/Card';
import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';
import accountTranslations from '../../../translations/account';

import Text from '../../../components/shared/Text';

import useAuth from '../../../hooks/useAuth';

import theme from '../../../theme';

import {
  SafeAreaTop,
  SafeAreaBottom,
  ProfileContainer,
  ImageContainer,
  NavigationContainer,
  FavouriteCocktailsContainer,
  TitleContainer,
  NameContainer,
  Content,
  ShowButton,
  styles,
  FavouriteCocktailsTextContainer,
} from './styles';

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  const { menu } = useMenu();
  const user = useAuth();

  const favoriteCocktails = menu.items.filter((favoriteItem) => favoriteItem.promoted);

  const flatlistRenderItem = ({ item }: { item: MenuItem }) => (
    <Card
      item={item}
      onClick={() => {
        return {};
      }}
    />
  );

  const navigation = useNavigation();

  return (
    <>
      <SafeAreaTop />
      <SafeAreaBottom>
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
              <FavouriteCocktailsContainer>
                <FavouriteCocktailsTextContainer>
                  <TitleContainer>
                    <Text color="primary" fontSize={18}>
                      {accountTranslations.accountPage.myFavouriteCoctails}
                    </Text>
                    <ShowButton onPress={() => navigation.navigate('FavouriteCocktails')}>
                      <Text color="tertiary" fontSize={16}>
                        {accountTranslations.accountPage.showButton}
                      </Text>
                    </ShowButton>
                  </TitleContainer>
                </FavouriteCocktailsTextContainer>
                <FlatList
                  data={favoriteCocktails}
                  horizontal
                  renderItem={flatlistRenderItem}
                  showsHorizontalScrollIndicator={false}
                />
              </FavouriteCocktailsContainer>
            </Content>
          </LinearGradient>
        </ProfileContainer>
      </SafeAreaBottom>
    </>
  );
};

export default Account;
