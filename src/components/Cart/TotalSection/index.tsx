import React, { useEffect } from 'react';
import withFeatureFlag from '../../../HOC/withFeatureFlag';

import useCart from '../../../hooks/useCart';
import useSettings from '../../../hooks/useSettings';
import cartTranslations from '../../../translations/cart';
import currencyTranslations from '../../../translations/currency';
import { Order } from '../../../types/Order';
import Text from '../../shared/Text';

import { TotalSectionContainer, TotalRow } from './styles';

interface TotalSectionProps {
  checkoutSection?: 'eatin' | 'takeaway' | 'delivery';
  order?: Order;
}

const ServiceFeeRowWithFalg = withFeatureFlag(TotalRow, 'FEAT_SERVICEFEE');

const TotalSection: React.FunctionComponent<TotalSectionProps> = ({ order, checkoutSection = 'eatin' }) => {
  const [settings] = useSettings();
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
          {cartTranslations.checkoutPage.subtotal.title}
        </Text>
        <Text color="primary" fontSize={14}>
          {currencyTranslations.currencyField}
          {pricingToShow.subtotal}
        </Text>
      </TotalRow>
      {checkingSection === 'delivery' && (
        <TotalRow>
          <Text color="primary" fontSize={14}>
            {cartTranslations.checkoutPage.deliveryFee.title}
          </Text>
          <Text color="primary" fontSize={14}>
            {currencyTranslations.currencyField}
            {pricingToShow.deliveryFee}
          </Text>
        </TotalRow>
      )}
      {checkingSection === 'takeaway' && <></>}
      {checkingSection === 'eatin' && (
        <ServiceFeeRowWithFalg>
          <Text color="primary" fontSize={14}>
            {cartTranslations.checkoutPage.serviceFee.title}
          </Text>
          <Text color="primary" fontSize={14}>
            {currencyTranslations.currencyField}
            {pricingToShow.servicefee}
          </Text>
        </ServiceFeeRowWithFalg>
      )}
      {!settings.features.FEAT_SERVICEFEE ? (
        <TotalRow>
          <Text bold color="primary" fontSize={14}>
            {cartTranslations.checkoutPage.totalField.title}
          </Text>
          <Text bold color="primary" fontSize={14}>
            {currencyTranslations.currencyField}
            {pricingToShow.totalWithServiceFee}
          </Text>
        </TotalRow>
      ) : (
        <TotalRow>
          <Text bold color="primary" fontSize={14}>
            {cartTranslations.checkoutPage.totalField.title}
          </Text>
          <Text bold color="primary" fontSize={14}>
            {currencyTranslations.currencyField}
            {pricingToShow.total}
          </Text>
        </TotalRow>
      )}
    </TotalSectionContainer>
  );
};

export default TotalSection;
