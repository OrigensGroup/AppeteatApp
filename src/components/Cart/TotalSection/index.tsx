import React from 'react';

import useCart from '../../../hooks/useCart';
import Text from '../../shared/Text';

import { TotalSectionContainer, TotalRow } from './styles';

interface TotalSectionProps {}

const TotalSection: React.FunctionComponent<TotalSectionProps> = () => {
  const { pricing } = useCart();
  return (
    <TotalSectionContainer>
      <TotalRow>
        <Text color="primary" fontSize={14}>
          Subtotal
        </Text>
        <Text color="primary" fontSize={14}>
          £ {pricing.subtotal}
        </Text>
      </TotalRow>
      <TotalRow>
        <Text color="primary" fontSize={14}>
          Service fee
        </Text>
        <Text color="primary" fontSize={14}>
          £ {pricing.servicefee}
        </Text>
      </TotalRow>
      <TotalRow>
        <Text color="primary" fontSize={14}>
          Total
        </Text>
        <Text bold color="primary" fontSize={14}>
          £ {pricing.total}
        </Text>
      </TotalRow>
    </TotalSectionContainer>
  );
};

export default TotalSection;
