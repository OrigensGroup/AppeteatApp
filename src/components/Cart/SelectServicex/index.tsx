import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import cartTranslations from '../../../translations/cart';
import Text from '../../shared/Text';
import ViewCta from '../../shared/ViewCta';

import { ServiceSelectionContainer, TextContainer, Line, PaymentButtonContainer, ServiceSelector } from './styles';
import TableNumber from './TableNumber';
import TakeAway from './TakeAway';

interface ServiceSelectionProps {}

const ServiceSelection: React.FunctionComponent<ServiceSelectionProps> = () => {
  const navigation = useNavigation();
  const [text, setText] = useState<string>('');

  const updateTableNumber = (TableNumber: string) => {
    setText(TableNumber);
  };

  return (
    <ServiceSelectionContainer>
      <ServiceSelector>
        <TableNumber placeholder={cartTranslations.tableNumber.placeholder} updateValue={updateTableNumber} />
        <TextContainer>
          <Line />
          <Text align="center" color="primary" fontSize={25}>
            OR
          </Text>
          <Line />
        </TextContainer>
        <TakeAway />
      </ServiceSelector>
      {text.length > 0 && (
        <PaymentButtonContainer>
          <ViewCta onClick={() => navigation.navigate('Payment')}>
            <Text bold color="secondary" fontSize={20}>
              {cartTranslations.goToPayment.title}
            </Text>
          </ViewCta>
        </PaymentButtonContainer>
      )}
    </ServiceSelectionContainer>
  );
};

export default ServiceSelection;
