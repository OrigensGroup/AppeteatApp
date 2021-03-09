import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { MainCoutnerWrapper } from './styles';

interface QuantityCounterProps {
  amount: number;
  onChange: (amount: number) => void;
}

const QuantityCounter: React.FunctionComponent<QuantityCounterProps> = ({ amount, onChange }) => {
  const theme = useTheme();

  return (
    <MainCoutnerWrapper>
      <InputSpinner
        buttonLeftImage={<Icon color={theme.colors.textPrimary} name="remove" size={24} />}
        buttonRightImage={<Icon color={theme.colors.textPrimary} name="add" size={24} />}
        buttonStyle={{
          backgroundColor: 'transparent',
          width: 32,
        }}
        color="white"
        fontSize={20}
        initialValue={amount}
        max={99}
        min={1}
        onChange={onChange}
        precision={2}
        step={1}
        textColor={theme.colors.textPrimary}
      />
    </MainCoutnerWrapper>
  );
};

export default QuantityCounter;
