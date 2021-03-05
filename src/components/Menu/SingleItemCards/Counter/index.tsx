import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { MainCoutnerWrapper } from './styles';

interface QuantityCounterProps {
  amount: number;
  onChange: (amount: number) => void;
}

const QuantityCounter: React.FunctionComponent<QuantityCounterProps> = ({ onChange, amount }) => {
  const theme = useTheme();

  return (
    <MainCoutnerWrapper>
      <InputSpinner
        buttonStyle={{
          backgroundColor: 'transparent',
          width: 32,
        }}
        color="white"
        fontSize={20}
        initialValue={amount}
        max={99}
        min={1}
        precision={2}
        onChange={onChange}
        step={1}
        textColor={theme.colors.textPrimary}
        buttonRightImage={<Icon color={theme.colors.textPrimary} name="add" size={24} />}
        buttonLeftImage={<Icon color={theme.colors.textPrimary} name="remove" size={24} />}
      />
    </MainCoutnerWrapper>
  );
};

export default QuantityCounter;
