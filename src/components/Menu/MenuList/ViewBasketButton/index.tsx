import React from 'react';

import useCart from '../../../../hooks/useCart';
import { t } from '../../../../translations';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';

import { MainButtonWrapper, SafeAreaViewBottom } from './styles';

interface ViewBasketButtonProps {
  onClick: () => void;
}

const ViewBasketButton: React.FunctionComponent<ViewBasketButtonProps> = ({ onClick }) => {
  const { cart, pricing } = useCart();

  return (
    <>
      <MainButtonWrapper>
        <ViewCta onClick={onClick}>
          <Text bold color="fixedWhite" fontSize={14}>
            ( {cart.length} )
          </Text>
          <Text bold color="fixedWhite" fontSize={14}>
            {t('menuTranslations.menuPage.viewBasketField.placeholder')}
          </Text>
          <Text bold color="fixedWhite" fontSize={14}>
            {t('currencyTranslations.currencyField')}
            {pricing.subtotal.toFixed(2)}
          </Text>
        </ViewCta>
      </MainButtonWrapper>
      <SafeAreaViewBottom />
    </>
  );
};

export default ViewBasketButton;
