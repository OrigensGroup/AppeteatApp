import React from 'react';

import Text from '../../../shared/Text';

import { BankCardContainer } from './styles';

interface BankCardProps {
  active?: boolean;
  onClick: () => void;
}

const BankCard: React.FunctionComponent<BankCardProps> = ({ active, onClick }) => {
  return (
    <BankCardContainer active={active} onPress={onClick}>
      <Text color="primary" fontSize={12}>
        Bank Card
      </Text>
    </BankCardContainer>
  );
};

export default BankCard;
