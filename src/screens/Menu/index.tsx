import React from "react";
import Promotion from "../../components/Homepage/Promotion";
import MenuCard from "../../components/Menu/MenuCards";
import SearchBar from "../../components/Menu/SearchBar";
import {
  CocktailContainer,
  HomepageContainer,
  CardsContainer,
  HomepageTitle,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
} from "./styles";

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require("../../img/Logo.png")}></LogoImage>
      </LogoContainer>
      <SearchBarWrapper>
        <SearchBar description="Cerca nel menu"/>
      </SearchBarWrapper>
      <CardsContainer>
        <MenuCard title="Mojito" description="Description" price="£7.5" onClick={console.log('Added to Basket!')}/>
        <MenuCard title="Mojito" description="Description" price="£7.5" onClick={console.log('Added to Basket!')}/>
      </CardsContainer>
    </HomepageContainer>
  );
};

export default Menu;
