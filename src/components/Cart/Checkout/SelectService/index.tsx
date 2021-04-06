import React, { useState } from 'react';

import withFeatureFlag from '../../../../HOC/withFeatureFlag';

import cartTranslations from '../../../../translations/cart';

import Text from '../../../shared/Text';

import SelectServiceButton from './SelectServiceButton';

import { SelectServiceWrapper, ButtonsWrapper, TitleWrapper, EmptyDiv } from './styles';

interface SelectServiceProps {
  setShowTable: (n: number) => void;
}

const TakeAwayWithFlag = withFeatureFlag(SelectServiceButton, 'FEAT_CART_TAKEAWAY');
const EmptyDivWithFlagTA = withFeatureFlag(EmptyDiv, 'FEAT_CART_TAKEAWAY');
const DeliveryWithFlag = withFeatureFlag(SelectServiceButton, 'FEAT_CART_DELIVERY');
const EmptyDivWithFlagDEL = withFeatureFlag(EmptyDiv, 'FEAT_CART_DELIVERY');

const SelectService: React.FunctionComponent<SelectServiceProps> = ({ setShowTable }) => {
  const [index, setIndex] = useState(0);

  return (
    <SelectServiceWrapper>
      <TitleWrapper>
        <Text bold color="primary" fontSize={16}>
          {cartTranslations.checkoutPage.orderDetails.title}
        </Text>
      </TitleWrapper>
      <ButtonsWrapper>
        <SelectServiceButton
          active={index === 0}
          onClick={() => {
            setShowTable(0);
            setIndex(0);
          }}
          title={cartTranslations.checkoutPage.orderDetails.eatIn}
        />
        <EmptyDivWithFlagTA />
        <TakeAwayWithFlag
          active={index === 1}
          onClick={() => {
            setShowTable(1);
            setIndex(1);
          }}
          title={cartTranslations.checkoutPage.orderDetails.takeAway}
        />
        <EmptyDivWithFlagDEL />
        <DeliveryWithFlag
          active={index === 2}
          onClick={() => {
            setShowTable(2);
            setIndex(2);
          }}
          title={cartTranslations.checkoutPage.orderDetails.delivery}
        />
      </ButtonsWrapper>
    </SelectServiceWrapper>
  );
};

export default SelectService;
