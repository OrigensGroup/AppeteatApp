import React, { useState } from 'react';

import withFeatureFlag from '../../../../HOC/withFeatureFlag';
import { t } from '../../../../translations';

import { CheckoutServices } from '../../../../types/Checkout';

import Text from '../../../shared/Text';

import SelectServiceButton from './SelectServiceButton';

import { SelectServiceWrapper, ButtonsWrapper, TitleWrapper, EmptyDiv } from './styles';

interface SelectServiceProps {
  selectService: React.Dispatch<React.SetStateAction<CheckoutServices>>;
}

const TakeAwayWithFlag = withFeatureFlag(SelectServiceButton, 'FEAT_CART_TAKEAWAY');
const EmptyDivWithFlagTA = withFeatureFlag(EmptyDiv, 'FEAT_CART_TAKEAWAY');
const DeliveryWithFlag = withFeatureFlag(SelectServiceButton, 'FEAT_CART_DELIVERY');
const EmptyDivWithFlagDEL = withFeatureFlag(EmptyDiv, 'FEAT_CART_DELIVERY');

const SelectService: React.FunctionComponent<SelectServiceProps> = ({ selectService }) => {
  const [index, setIndex] = useState(0);

  return (
    <SelectServiceWrapper>
      <TitleWrapper>
        <Text bold color="primary" fontSize={14}>
          {t('cartTranslations.checkoutPage.orderDetails.title')}
        </Text>
      </TitleWrapper>
      <ButtonsWrapper>
        <SelectServiceButton
          active={index === 0}
          onClick={() => {
            selectService((oldService) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { address, orderTime, phoneNumber, ...stripped } = oldService;

              return { ...stripped, type: 'eatin', table: '' };
            });

            setIndex(0);
          }}
          title={t('cartTranslations.checkoutPage.orderDetails.eatIn')}
        />
        <EmptyDivWithFlagTA />
        <TakeAwayWithFlag
          active={index === 1}
          onClick={() => {
            selectService((oldService) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { address, table, ...stripped } = oldService;

              return {
                ...stripped,
                type: 'takeaway',
                phoneNumber: '',
                orderTime: '',
              };
            });

            setIndex(1);
          }}
          title={t('cartTranslations.checkoutPage.orderDetails.takeAway')}
        />
        <EmptyDivWithFlagDEL />
        <DeliveryWithFlag
          active={index === 2}
          onClick={() => {
            selectService((oldService) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { table, ...stripped } = oldService;

              return {
                ...stripped,
                type: 'delivery',
                address: '',
                phoneNumber: '',
                orderTime: '',
              };
            });

            setIndex(2);
          }}
          title={t('cartTranslations.checkoutPage.orderDetails.delivery')}
        />
      </ButtonsWrapper>
    </SelectServiceWrapper>
  );
};

export default SelectService;
