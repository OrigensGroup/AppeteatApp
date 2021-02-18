import React, { useRef, useState } from "react";
import SearchBar from "../../../components/Menu/MenuComponents/SearchBar";
import menuTranslations from '../../../translations/menu';
import Filter from '../../../components/Menu/MenuComponents/Filter';
import QrCode from '../../../components/Menu/MenuComponents/QrCode';
import Swiper from 'react-native-swiper';
import SwiperP1 from '../../../components/Menu/MenuComponents/SwiperP1'
import MenuTabs from "../../../components/Menu/MenuComponents/MenuTabs";
import ViewBasketButton from "../../../components/Menu/MenuComponents/ViewBasketButton"

import {
  MenuWrapper,
  TopBarWrapper,
  CardsContainer,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
  SwiperWrapper,
  SwiperWrapper2,
  TopContainer,
  BottomContainer,
  BasketButtonWrapper,
} from "./styles";

import { FlatList } from "react-native-gesture-handler";
import { BottomTabBar } from "@react-navigation/bottom-tabs";


const DATA = [
  {
    id: '1',
    title: 'P1',
  },
  {
    id: '2',
    title: 'P2',
  },
  {
    id: '3',
    title: 'P3',
  },
];


interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const [menuIndex, setMenuIndex] = useState (0);

  const onSwipe= (index: number) => {

    if(ref.current && index!== menuIndex){
      ref.current.scrollBy(index - menuIndex, true);
    }
    setMenuIndex(index);
  }

  return (
    <MenuWrapper>
      <TopContainer>
        <TopBarWrapper>
            <LogoContainer>
              <LogoImage source={require("../../../img/Logo.png")}></LogoImage>
            </LogoContainer>
            <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder}></QrCode>
        </TopBarWrapper>
        <MenuTabs tabActive={menuIndex} onChange={onSwipe} />
        <SearchBarWrapper>
          <Filter onClick={() => console.log('Hello World!')}></Filter>
          <SearchBar 
          placeholder={menuTranslations.searchField.placeholder}
          textContentType='name'
          onClick={() => console.log('Hello World!')}/>
        </SearchBarWrapper>
      </TopContainer>
      <BottomContainer>
        <CardsContainer>
          <Swiper ref={ref} loop={false} showsPagination={false} onIndexChanged={onSwipe}>
            {/* <FlatList data={DATA} keyExtractor={({index}) => index} renderItem={({item})=>(
              <SwiperP1/>
            )}/> */}
            <SwiperWrapper>
              <SwiperP1></SwiperP1>
            </SwiperWrapper>
            <SwiperWrapper2>
            <SwiperP1 />
            </SwiperWrapper2>
          </Swiper>
        </CardsContainer>
      </BottomContainer>
      <BasketButtonWrapper>
        <ViewBasketButton onClick={()=>console.log("Hello")}></ViewBasketButton>
      </BasketButtonWrapper>
    </MenuWrapper>
  );
};

export default Menu;


