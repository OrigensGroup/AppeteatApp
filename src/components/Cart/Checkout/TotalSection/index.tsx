import React from 'react';

import useCart from '../../../../hooks/useCart';
import cartTranslations from '../../../../translations/cart';
import currencyTranslations from '../../../../translations/currency';
import Text from '../../../shared/Text';

import { TotalSectionContainer, TotalRow } from './styles';

interface TotalSectionProps {}

const TotalSection: React.FunctionComponent<TotalSectionProps> = () => {
  const { pricing } = useCart();
  return (
    <TotalSectionContainer>
      <TotalRow>
        <Text color="primary" fontSize={14}>
          {cartTranslations.checkoutPage.subtotal.title}
        </Text>
        <Text color="primary" fontSize={14}>
          {currencyTranslations.currencyField}
          {pricing.subtotal}
        </Text>
      </TotalRow>
      <TotalRow>
        <Text color="primary" fontSize={14}>
          {cartTranslations.checkoutPage.serviceFee.title}
        </Text>
        <Text color="primary" fontSize={14}>
          {currencyTranslations.currencyField}
          {pricing.servicefee}
        </Text>
      </TotalRow>
      <TotalRow>
        <Text bold color="primary" fontSize={14}>
          {cartTranslations.checkoutPage.totalField.title}
        </Text>
        <Text bold color="primary" fontSize={14}>
          {currencyTranslations.currencyField}
          {pricing.total}
        </Text>
      </TotalRow>
    </TotalSectionContainer>
  );
};

export default TotalSection;
