import React from 'react';
import useCart from '../../../hooks/useCart';
import currencyTranslations from '../../../translations/currency';
import menuTranslations from '../../../translations/menu';
import Text from '../../shared/Text';
import ViewCta from '../../shared/ViewCta';
import { MainButtonWrapper } from './styles';

interface ViewBasketButtonProps {
  onClick: () => void;
}

const ViewBasketButton: React.FunctionComponent<ViewBasketButtonProps> = ({ onClick }) => {
  const { cart, pricing } = useCart();

  return (
    <MainButtonWrapper>
      <ViewCta onClick={onClick}>
        <Text color="secondary" fontSize={18} bold>
          ( {cart.length} )
        </Text>
        <Text color="secondary" fontSize={18} bold>
          {menuTranslations.viewBasketField.placeholder}
        </Text>
        <Text color="secondary" fontSize={18} bold>
          {currencyTranslations.currencyField.placeholder}
          {pricing.subtotal}
        </Text>
      </ViewCta>
    </MainButtonWrapper>
  );
};

export default ViewBasketButton;
