import React, { useState } from 'react';

import cartTranslations from '../../../../translations/cart';
import Text from '../../../shared/Text';

import {
  CardDetailsContainer,
  TextFieldInput,
  DateCvvContainer,
  DateCvvWrap,
  TextContainer,
  MarginDiv,
} from './styles';

interface CardDetailsProps {}

const CardDetails: React.FunctionComponent<CardDetailsProps> = () => {
  const [cardHolderName, setCardHolderName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [ccv, setCcv] = useState<string>('');

  const [index, setIndex] = useState(5);

  return (
    <CardDetailsContainer>
      <TextContainer>
        <Text bold color="primary" fontSize={18}>
          {cartTranslations.cardDetails.title}
        </Text>
      </TextContainer>
      <Text color="quartiary" fontSize={14}>
        Carholder Name
      </Text>
      <TextFieldInput
        active={index === 0}
        autoCapitalize="none"
        onChangeText={setCardHolderName}
        onFocus={() => setIndex(0)}
        value={cardHolderName.trim()}
      />
      <Text color="quartiary" fontSize={14}>
        Card Number
      </Text>
      <TextFieldInput
        active={index === 1}
        autoCapitalize="none"
        onChangeText={setCardNumber}
        onFocus={() => setIndex(1)}
        value={cardNumber.trim()}
      />
      <DateCvvContainer>
        <DateCvvWrap>
          <Text color="quartiary" fontSize={14}>
            Expiry date
          </Text>
          <TextFieldInput
            active={index === 2}
            autoCapitalize="none"
            onChangeText={setExpiryDate}
            onFocus={() => setIndex(2)}
            value={expiryDate.trim()}
          />
        </DateCvvWrap>
        <MarginDiv />
        <DateCvvWrap>
          <Text color="quartiary" fontSize={14}>
            Security Code
          </Text>
          <TextFieldInput
            active={index === 3}
            autoCapitalize="none"
            onChangeText={setCcv}
            onFocus={() => setIndex(3)}
            value={ccv.trim()}
          />
        </DateCvvWrap>
      </DateCvvContainer>
    </CardDetailsContainer>
  );
};

export default CardDetails;
