import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';

import CloseButton from '../MenuComponents/CloseButton';
import HeartButton from '../MenuComponents/HeartButton';
import AddToBasketButton from './AddToBasketButton';
import singleDrinkTranslations from '../../../translations/singleDrink';

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
  BasketButtonWrapper,
  PicWrapper,
  TitleWrapper,
} from './styles';
import {  useRoute } from '@react-navigation/native';
import Ingredients from './Ingredients';
import useCart from '../../../hooks/useCart';

const INGREDIENTS_DATA = ['Acqua', 'ide', 'dniadn'];

interface SingleItemProps {
  onClick: () => void;
  title: string;
}

const SingleItem: React.FunctionComponent<SingleItemProps> = ({ onClick }) => {
  const route = useRoute();
  const { addItemToCart } = useCart();

  const { item } = route.params;

  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('MenuList');
  };

  // const addToCart =

  const ingredients = useCallback(() => INGREDIENTS_DATA.map((item) => <Ingredients key={item} ingredient={item} />), [
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
        <PicWrapper>
          <ItemPic source={require('../../../img/mojito.jpg')} />
        </PicWrapper>
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
