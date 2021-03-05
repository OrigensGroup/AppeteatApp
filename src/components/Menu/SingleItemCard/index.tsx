import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import CloseButton from '../MenuTopBar/CloseButton';
import HeartButton from './HeartButton';
import singleDrinkTranslations from '../../../translations/singleDrink';
import useCart from '../../../hooks/useCart';
import AddToBasketButton from './AddToBasketButton';
import Text from '../../Shared/Text'
import { SharedElement } from 'react-navigation-shared-element';


import {
  Wrapper,
  ItemPic,
  ButtonsWrapper,
  DetailsContainer,
  ItemDetails,
  AllertWrapper,
  IngredientsWrapper,
  IngredientsTopRow,
  CustomiseItem,
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
          <Text color='primary' fontSize={18} bold>{item.title}</Text>
        </TitleWrapper>
        <HeartButton onClick={() => console.log('hello world')} />
      </ButtonsWrapper>
      <ScrollView>
        <SharedElement id={`item.${item.id}.image`} style={{ flex: 1, height: 320, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, marginBottom: 16 }}>
          <ItemPic source={{ uri: item.image }} />
        </SharedElement>
        <DetailsContainer>
          <ItemDetails>
            <Text color='primary' fontSize={14}>{singleDrinkTranslations.descriptionField.placeholder}</Text>
            <AllertWrapper>
              <Text color='quartiary' fontSize={14}>{singleDrinkTranslations.alergiesField.placeholder}</Text>
            </AllertWrapper>
            <IngredientsWrapper>
              <IngredientsTopRow>
                <Text color='primary' fontSize={14} bold>{singleDrinkTranslations.ingredientsField.placeholder}</Text>
                <CustomiseItem>
                  <Text color='quartiary' fontSize={14} bold>{singleDrinkTranslations.customiseField.placeholder}</Text>
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
