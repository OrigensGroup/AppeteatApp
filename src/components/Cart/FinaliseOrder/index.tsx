import { useNavigation } from '@react-navigation/native';
import React from 'react';
import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import Spinner from '../../Shared/Spinner';
import Text from '../../Shared/Text';
import ViewCta from '../../Shared/ViewCta';
import ValueItem from '../ValueItem';

import { FinaliseOrderContainer, TipCounterWrapper, Separator } from './styles';

interface FinaliseOrderProps {}

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = () => {
  const { pricing, addTips } = useCart();
  const navigation = useNavigation();

  const navigate = () => {};

  return (
    <FinaliseOrderContainer>
      <ValueItem
        title={cartTranslations.tipField.title}
        value={pricing.tip}
        icon={
          <TipCounterWrapper>
            <Spinner hideInput initialValue={0} onChange={addTips} />
          </TipCounterWrapper>
        }
        color="quartiary"
      />
      <ValueItem title={cartTranslations.orderTotField.title} value={pricing.total} color="primary" />
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
