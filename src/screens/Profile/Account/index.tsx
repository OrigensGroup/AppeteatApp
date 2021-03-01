import React from 'react';

import { FlatList } from 'react-native';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';
import Card from '../../../components/Profile/Card';
import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';
import accountTranslations from '../../../translations/account';

import {
  ProfileContainer,
  ImageContainer,
  NavigationContainer,
  CardWrap,
  TitleWrap,
  TitleWrap2,
  Content,
  ShowButton
} from './styles';
import Text from '../../../components/Shared/Text';
import { useNavigation } from '@react-navigation/native';

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  const { menu } = useMenu();

  const favoriteCocktails = menu.items.filter((favoriteItem) => favoriteItem.promoted);

  
   const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('FavouriteCocktails');
  };

  const flatlistRenderItem = ({ item }: { item: MenuItem }) => (
    <Card
      item={item}
      onClick={() => {
        return {};
      }}
    />
  );

  const username = 'Alessandro Carpanzano';

  return (
    <ProfileContainer>
      <ImageContainer>
        <ProfileImage />
        <TitleWrap2>
          <Text color="primary" fontSize={20}>
            {username}
          </Text>
        </TitleWrap2>
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
        <CardWrap>
          <TitleWrap>
            <Text color="primary" fontSize={20}>
              {accountTranslations.accountPage.favoriteCocktails}
            </Text>
            <ShowButton onPress={() => navigation.navigate('FavouriteCocktails')}>
              <Text color="tertiary" fontSize={16}>
                {accountTranslations.accountPage.showButton}
              </Text>
            </ShowButton>
          </TitleWrap>
          <FlatList
            data={favoriteCocktails}
            horizontal
            renderItem={flatlistRenderItem}
            showsHorizontalScrollIndicator={false}
          />
        </CardWrap>
      </Content>
    </ProfileContainer>
  );
};

export default Account;
