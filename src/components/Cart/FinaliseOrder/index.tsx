import { useNavigation } from '@react-navigation/native';
import React from 'react';

// import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import Text from '../../shared/Text';
import ViewCta from '../../shared/ViewCta';

import {
  FinaliseOrderContainer,
  // TipCounterWrapper,
  // Separator
} from './styles';

interface FinaliseOrderProps {}

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = () => {
  // const { addTips, pricing } = useCart();
  const navigation = useNavigation();

  return (
    <FinaliseOrderContainer>
      <ViewCta onClick={() => navigation.navigate('SelectService')}>
        <Text bold color="fixedWhite" fontSize={20}>
          {cartTranslations.checkoutButton.title}
        </Text>
      </ViewCta>
    </FinaliseOrderContainer>
  );
};

export default FinaliseOrder;
