import React from 'react';

import {
  ProfileContainer,
  ImageContainer,
  NavigationContainer,
  CardWrap,
  CocktailContainer,
  TitleWrap,
  TitleWrap2,
  Content,
} from "./styles";
import { Text } from "react-native";
import ProfileImage from "../../../components/Profile/ProfileImage";
import ProfileLink from "../../../components/Profile/ProfileLink";
import Card from "../../../components/Profile/Card";
import Title from "../../../components/Shared/Text";

interface AccountProps {}

const Account: React.FunctionComponent<AccountProps> = () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <ProfileImage />
        <TitleWrap2>
          <Title color="#000" fontSize={20} bold>
            Alessandro Carpanzano
          </Title>
        </TitleWrap2>
      </ImageContainer>
      <Content
        contentContainerStyle={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavigationContainer>
          <ProfileLink />
        </NavigationContainer>
        <CardWrap>
          <TitleWrap>
            <Title color="#000" fontSize={20}>
              My Favourite Cocktails
            </Title>
          </TitleWrap>
          <CocktailContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Card title="Mojito" description="Description" />
            <Card title="Daiquiri" description="Description" />
            <Card title="Negroni" description="Description" />
          </CocktailContainer>
        </CardWrap>
      </Content>
    </ProfileContainer>
  );
};

export default Account;
