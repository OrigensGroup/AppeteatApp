import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  MainButtonWrapper,
  MainButton,
  TextWrapper,
  ButtonText,
} from './styles';

interface BasketButtonProps {
  onClick: () => void;
}

const AddToBasketButton: React.FunctionComponent<BasketButtonProps> = ( {onClick} ) => {
  return (
    <MainButtonWrapper>
      <MainButton onPress={onClick}>
        <TextWrapper>
          <ButtonText>(3)</ButtonText>
          <ButtonText>Add To Basket</ButtonText>
          <ButtonText>£7.5</ButtonText>
        </TextWrapper>
      </MainButton>
    </MainButtonWrapper>
  );
};

export default AddToBasketButton;