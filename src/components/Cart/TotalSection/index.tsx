import React, { useEffect } from 'react';

import useCart from '../../../hooks/useCart';
import { t } from '../../../translations';
import { Order } from '../../../types/Order';
import Text from '../../shared/Text';

import { TotalSectionContainer, TotalRow } from './styles';

interface TotalSectionProps {
  checkoutSection?: 'eatin' | 'takeaway' | 'delivery';
  order?: Order;
}

const TotalSection: React.FunctionComponent<TotalSectionProps> = ({ order, checkoutSection = 'eatin' }) => {
  const { pricing, setPricingType } = useCart();
  const pricingToShow = order?.pricing ?? pricing;
  const checkingSection = order?.pricing.checkoutType ?? checkoutSection;

  useEffect(() => {
    if (!order && pricing.checkoutType !== checkoutSection) {
      setPricingType(checkoutSection);
    }
  }, [order, pricing.checkoutType, checkoutSection, setPricingType]);

  return (
    <TotalSectionContainer>
      <TotalRow>
        <Text color="primary" fontSize={14}>
          {t('cartTranslations.checkoutPage.subtotal.title')}
        </Text>
        <Text color="primary" fontSize={14}>
          {t('currencyTranslations.currencyField')}
          {pricingToShow.subtotal}
        </Text>
      </TotalRow>
      {checkingSection === 'delivery' && (
        <TotalRow>
          <Text color="primary" fontSize={14}>
            {t('cartTranslations.checkoutPage.deliveryFee.title')}
          </Text>
          <Text color="primary" fontSize={14}>
            {t('currencyTranslations.currencyField')}
            {pricingToShow.deliveryFee}
          </Text>
        </TotalRow>
      )}
      {checkingSection === 'takeaway' && <></>}

      {checkingSection === 'eatin' && pricingToShow.servicefee !== 0 && (
        <TotalRow>
          <Text color="primary" fontSize={14}>
            {t('cartTranslations.checkoutPage.serviceFee.title')}
          </Text>
          <Text color="primary" fontSize={14}>
            {t('currencyTranslations.currencyField')}
            {pricingToShow.servicefee}
          </Text>
        </TotalRow>
      )}
      <TotalRow>
        <Text bold color="primary" fontSize={14}>
          {t('cartTranslations.checkoutPage.totalField.title')}
        </Text>
        <Text bold color="primary" fontSize={14}>
          {t('currencyTranslations.currencyField')}
          {pricingToShow.total}
        </Text>
      </TotalRow>
    </TotalSectionContainer>
  );
};

export default TotalSection;
