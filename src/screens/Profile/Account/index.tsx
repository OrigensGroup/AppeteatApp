import React from 'react';

import { FlatList } from 'react-native';

import ProfileImage from '../../../components/Profile/ProfileImage';
import ProfileLink from '../../../components/Profile/ProfileLink';
import Card from '../../../components/Profile/Card';
import Text from '../../../components/Shared/Text';
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
} from './styles';

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  const { menu } = useMenu();

  const favoriteCocktails = menu.items.filter((favoriteItem) => favoriteItem.promoted);

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
