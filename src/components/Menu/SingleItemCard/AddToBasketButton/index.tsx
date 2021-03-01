import React from 'react';

import singleDrinkTranslations from '../../../../translations/singleDrink';
import QuantityCounter from '../Counter';
import Text from '../../../Shared/Text'

import { MainButton, TextWrapper, BottomButtonsWrapper } from './styles';

interface BasketButtonProps {
  onClick: () => void;
  price: any;
}

const AddToBasketButton: React.FunctionComponent<BasketButtonProps> = ({ onClick, price }) => {
  return (
    <BottomButtonsWrapper>
      <QuantityCounter />
      <MainButton onPress={onClick}>
        <TextWrapper>
          <Text color='primary' fontSize={18} bold>{singleDrinkTranslations.viewBasketButtonField.placeholder}</Text>
          <Text color='primary' fontSize={18} bold>+ {price}</Text>
        </TextWrapper>
      </MainButton>
    </BottomButtonsWrapper>
  );
};

export default AddToBasketButton;
