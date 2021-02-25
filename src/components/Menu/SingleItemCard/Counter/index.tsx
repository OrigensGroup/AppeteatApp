import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import useCart from '../../../../hooks/useCart';


import {
  CounterWrapper,
  InfoWrapper,
  MainCoutnerWrapper,
  ModalCounterWrapper,
  ModalCounterContainer
} from './styles';

interface QuantityCounterProps {
  item: any;
  onChange: () => void;
}

const QuantityCounter: React.FunctionComponent<QuantityCounterProps> = ({ onChange, item }) => {

  const { updateItemQuantity } = useCart();

  const updateQuantity = (number: number) => {
    updateItemQuantity(item, number);
  };

  return (
    <MainCoutnerWrapper>
      <CounterWrapper>
        <InfoWrapper>
          <ModalCounterContainer>
            <ModalCounterWrapper>
              <InputSpinner
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: 20,
                  height: 20,
                }}
                buttonTextColor="#AFAFAF"
                color="white"
                fontSize={20}
                initialValue={1}
                max="99"
                min="0.00"
                precision={2}
                onChange={onChange}
                //<AddToBasketButton onClick={() => addItemToCart({ ...item, quantity: 1 })} price={item.price} />
                step="1"
                textColor="#000000"
                width={80}
                buttonRightImage={<Icon color="#0008" name="add" size={24} />}
                buttonLeftImage={<Icon color="#0008" name="remove" size={24} />}
              />
            </ModalCounterWrapper>
          </ModalCounterContainer>
        </InfoWrapper>
      </CounterWrapper>
    </MainCoutnerWrapper>
  );
};


export default QuantityCounter;
