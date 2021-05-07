import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import Text from '../../../../shared/Text';

import { CashPayContainer, CashPayText, CashPayIcon } from './styles';
import { t } from '../../../../../translations';

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
          {t('cartTranslations.checkoutPage.paymentMethod.cashPayment')}
        </Text>
      </CashPayText>
    </CashPayContainer>
  );
};

export default CashPay;
