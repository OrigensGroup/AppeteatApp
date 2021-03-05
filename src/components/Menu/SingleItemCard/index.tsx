import React, { useCallback } from 'react';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import IconButton from '../../Shared/IconButton';
import singleDrinkTranslations from '../../../translations/singleDrink';
import useCart from '../../../hooks/useCart';
import AddToBasketButton from '../SingleItemCards/AddToBasketButton';
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

import Ingredients from '../SingleItemCards/Ingredients';

const INGREDIENTS_DATA = ['Acqua', 'ide', 'dniadn'];

interface SingleItemProps {
  onClick: () => void;
  title: string;
}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  const theme = useTheme();
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
        <IconButton onClick={navigate} iconName='ios-close' size={28} color={theme.colors.primary} />
        <TitleWrapper>
          <Text color='primary' fontSize={18} bold>{item.title}</Text>
        </TitleWrapper>
        <IconButton onClick={navigate} iconName='heart-outline' size={28} color={theme.colors.primary} />
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
