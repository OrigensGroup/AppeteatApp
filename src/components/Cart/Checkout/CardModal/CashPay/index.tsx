import React from 'react';
import cartTranslations from '../../../../../translations/cart';
import Text from '../../../../shared/Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

import { CashPayContainer, CashPayText, CashPayIcon } from './styles';

interface CashPayProps {}

const CashPay: React.FunctionComponent<CashPayProps> = () => {
  const theme = useTheme();
  return (
    <CashPayContainer>
      <CashPayIcon>
        <Icon color={theme.colors.text} name="cash" size={32} />
      </CashPayIcon>
      <CashPayText>
        <Text color="primary" fontSize={15}>
          {cartTranslations.checkoutPage.paymentMethod.cashPayment}
        </Text>
      </CashPayText>
    </CashPayContainer>
  );
};

export default CashPay;
