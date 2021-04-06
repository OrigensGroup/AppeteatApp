import React, { useState } from 'react';

import cartTranslations from '../../../../translations/cart';

import Text from '../../../shared/Text';

import SelectServiceButton from './SelectServiceButton';

import { SelectServiceWrapper, ButtonsWrapper, TitleWrapper, EmptyDiv } from './styles';

interface SelectServiceProps {
  setShowTable: (n: number) => void;
}

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
        <EmptyDiv />
        <SelectServiceButton
          active={index === 1}
          onClick={() => {
            setShowTable(1);
            setIndex(1);
          }}
          title={cartTranslations.checkoutPage.orderDetails.takeAway}
        />
        <EmptyDiv />
        <SelectServiceButton
          active={index === 2}
          onClick={() => {
            setShowTable(2);
            setIndex(2);
          }}
          title="Delivery"
        />
      </ButtonsWrapper>
    </SelectServiceWrapper>
  );
};

export default SelectService;
