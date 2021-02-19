import React from "react";

import CloseButton from "../CloseButton";
import HeartButton from "../HeartButton";
import AddToBasketButton from "../AddToBasketButton";

import {
  Wrapper,
  ItemPic,
  ButtonsWrapper,
  DetailsContainer,
  ItemDetails,
  DetailsTopRow,
  Title,
  Price,
  ItemDescription,
  AllertWrapper,
  AllergiesAllert,
  IngredientsWrapper,
  IngredientsTopRow,
  CustomiseItem,
  OrangeBoldText,
  BoldText,
  Text,
} from "./styles";

interface SingleItemProps {}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  return (
    <Wrapper>
      <ItemPic source={require("../../../img/mojito.jpg")}>
        <ButtonsWrapper>
          <CloseButton onClick={() => console.log("hello world")} />
          <HeartButton onClick={() => console.log("hello world")} />
        </ButtonsWrapper>
      </ItemPic>
      <DetailsContainer>
        <ItemDetails>
          <DetailsTopRow>
            <Title>Mojito</Title>
            <Price>£7.5</Price>
          </DetailsTopRow>
          <ItemDescription>
            The mojito is the epitome of the refreshing cocktail, stripped down
            to just the bare essentials of rum, lime juice, sugar, soda water,
            and mint. Each ingredient is seemingly specifically selected to cure
            hot weather-induced pangs of thirst — it is in turns sweet, acidic,
            minty, and sparkling.
          </ItemDescription>
          <AllertWrapper>
            <AllergiesAllert>
              Make sure to let us know if you have any allergies
            </AllergiesAllert>
          </AllertWrapper>
          <IngredientsWrapper>
            <IngredientsTopRow>
              <BoldText>Ingredients</BoldText>
              <CustomiseItem>
                <OrangeBoldText>Customise Item</OrangeBoldText>
              </CustomiseItem>
            </IngredientsTopRow>
            <Text>White & Golden Rum</Text>
            <Text>Sugar</Text>
            <Text>Sugar</Text>
            <Text>Sugar</Text>
            <Text>Sugar</Text>
            <Text>Sugar</Text>
            <Text>Sugar</Text>
            <AddToBasketButton onClick={() => console.log("Hello World")} />
          </IngredientsWrapper>
        </ItemDetails>
      </DetailsContainer>
    </Wrapper>
  );
};

export default SingleItem;
