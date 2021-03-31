import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { MainCoutnerWrapper } from './styles';

interface QuantityCounterProps {
  amount: number;
  onChange: (amount: number) => void;
  stepSize: number;
}

const QuantityCounter: React.FunctionComponent<QuantityCounterProps> = ({ amount, onChange, stepSize }) => {
  const theme = useTheme();

  return (
    <MainCoutnerWrapper>
      <InputSpinner
        buttonLeftImage={<Icon color={theme.colors.fixedBlack} name="remove" size={24} />}
        buttonRightImage={<Icon color={theme.colors.fixedBlack} name="add" size={24} />}
        buttonStyle={{
          margin: 0,
          padding: 0,
          backgroundColor: 'transparent',
          width: 32,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        buttonTextColor={theme.colors.fixedBlack}
        color="transparent"
        fontSize={20}
        max={99}
        min={stepSize}
        onChange={onChange}
        precision={2}
        step={stepSize}
        value={amount}
      />
    </MainCoutnerWrapper>
  );
};

export default QuantityCounter;
