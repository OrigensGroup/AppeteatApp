import React from "react";
import Promotion from "../../components/Homepage/Promotion";
import MenuCard from "../../components/Menu/MenuCards";
import SearchBar from "../../components/Menu/SearchBar";
import menuTranslations from '../../translations/menu';
import Filter from '../../components/Menu/Filter';
import QrCode from '../../components/Menu/QrCode';
import Swiper from 'react-native-swiper';
import SwiperP1 from '../../components/Menu/SwiperP1'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  MenuWrapper,
  MenuContainer,
  TopBarWrapper,
  CardsContainer,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
  SwiperWrapper,
  SwiperWrapper2,
} from "./styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  return (
    <MenuWrapper>
      <MenuContainer>
      <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require("../../img/Logo.png")}></LogoImage>
          </LogoContainer>
          <QrCode onClick={console.log('Hello World!')} title={menuTranslations.qrField.placeholder}></QrCode>
      </TopBarWrapper>
        <SearchBarWrapper>
          <Filter onClick={console.log('Hello World!')}></Filter>
          <SearchBar 
          placeholder={menuTranslations.searchField.placeholder}
          textContentType='name'
          onClick={console.log('Hello World!')}/>
        </SearchBarWrapper>
        <CardsContainer>
          <Swiper loadMinimal={true} loadMinimalSize={1} loop={false} showsPagination={false}>
            <SwiperWrapper>
              <SwiperP1></SwiperP1>
            </SwiperWrapper>
            <SwiperWrapper2>
            <SwiperP1>
            </SwiperP1>
            </SwiperWrapper2>
          </Swiper>
        </CardsContainer>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default Menu;


