import React from 'react';

import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import Spinner from '../../shared/Spinner';
import Text from '../../shared/Text';
import ViewCta from '../../shared/ViewCta';
import ValueItem from '../ValueItem';

import { FinaliseOrderContainer, TipCounterWrapper, Separator } from './styles';

interface FinaliseOrderProps {}

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = () => {
  const { addTips, pricing } = useCart();

  return (
    <FinaliseOrderContainer>
      <ValueItem
        color="quartiary"
        icon={
          <TipCounterWrapper>
            <Spinner hideInput initialValue={0} onChange={addTips} />
          </TipCounterWrapper>
        }
        title={cartTranslations.tipField.title}
        value={pricing.tip}
      />
      <ValueItem color="primary" title={cartTranslations.orderTotField.title} value={pricing.total} />
      <Separator />
      <ViewCta onClick={navigate}>
        <Text bold color="secondary" fontSize={20}>
          {cartTranslations.goToCheckoutCta.title}
        </Text>
      </ViewCta>
    </FinaliseOrderContainer>
  );
};

export default FinaliseOrder;
