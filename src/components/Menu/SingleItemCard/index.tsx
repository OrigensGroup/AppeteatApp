import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import CloseButton from '../MenuComponents/CloseButton';
import HeartButton from '../MenuComponents/HeartButton';
import singleDrinkTranslations from '../../../translations/singleDrink';
import useCart from '../../../hooks/useCart';
import AddToBasketButton from './AddToBasketButton';
import { SharedElement } from 'react-navigation-shared-element';


import {
  Wrapper,
  ItemPic,
  ButtonsWrapper,
  DetailsContainer,
  ItemDetails,
  Title,
  ItemDescription,
  AllertWrapper,
  AllergiesAllert,
  IngredientsWrapper,
  IngredientsTopRow,
  CustomiseItem,
  OrangeBoldText,
  BoldText,
  BasketButtonWrapper,
  TitleWrapper,
} from './styles';

import Ingredients from './Ingredients';

const INGREDIENTS_DATA = ['Acqua', 'ide', 'dniadn'];

interface SingleItemProps {
  onClick: () => void;
  title: string;
}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  const route = useRoute();
  const { addItemToCart } = useCart();

  const { item } = route.params;

  const navigation = useNavigation();

  const navigate = () => {
    navigation.goBack();
  };

  // const addToCart =

  const ingredients = useCallback(() => INGREDIENTS_DATA.map((item) => <Ingredients ingredient={item} key={item} />), [
    INGREDIENTS_DATA,
  ]);
  return (
    <Wrapper>
      <ButtonsWrapper>
        <CloseButton onClick={navigate} />
        <TitleWrapper>
          <Title>{item.title}</Title>
        </TitleWrapper>
        <HeartButton onClick={() => console.log('hello world')} />
      </ButtonsWrapper>
      <ScrollView>
         <SharedElement id={`item.${item.id}.image`} style={{flex:1, height: 320, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, marginBottom: 16   }}> 
          <ItemPic source={{uri: item.image}} />
          </SharedElement> 
        <DetailsContainer>
          <ItemDetails>
            <ItemDescription>{singleDrinkTranslations.descriptionField.placeholder}</ItemDescription>
            <AllertWrapper>
              <AllergiesAllert>{singleDrinkTranslations.alergiesField.placeholder}</AllergiesAllert>
            </AllertWrapper>
            <IngredientsWrapper>
              <IngredientsTopRow>
                <BoldText>{singleDrinkTranslations.ingredientsField.placeholder}</BoldText>
                <CustomiseItem>
                  <OrangeBoldText>{singleDrinkTranslations.customiseField.placeholder}</OrangeBoldText>
                </CustomiseItem>
              </IngredientsTopRow>
              {ingredients()}
            </IngredientsWrapper>
          </ItemDetails>
        </DetailsContainer>
      </ScrollView>
      <BasketButtonWrapper>
        <AddToBasketButton onClick={() => addItemToCart({ ...item, quantity: 1 })} price={item.price} />
      </BasketButtonWrapper>
    </Wrapper>
  );
};

export default SingleItem;
