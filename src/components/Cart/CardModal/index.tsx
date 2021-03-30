import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { LiteCreditCardInput } from 'react-native-credit-card-input';

import stripe from 'tipsi-stripe';
import type { Card } from 'tipsi-stripe';

import ViewCta from '../../shared/ViewCta';
import Text from '../../shared/Text';

import { PopUpContainer, CardModalHeader, CardModalChoice } from './styles';
import NativePay from './NativePay';

interface CardModalProps {
  onCardUpdate: (v: Card | 'native') => void;
  isModalVisible: boolean;
  onClose: () => void;
}

const CardModal: React.FunctionComponent<CardModalProps> = ({ isModalVisible, onCardUpdate, onClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(0);
  const [cardStatus, setCardStatus] = useState<any>({});
  const [canPayWithNativePay, setCanPayWithNativePay] = useState(false);

  useEffect(() => {
    stripe.canMakeNativePayPayments({ networks: ['american_express', 'visa', 'master_card'] }).then((res) => {
      setCanPayWithNativePay(res);
    });
  }, []);

  const changeActive = (i: number) => () => {
    setSelectedPaymentMethod(i);

    if (i === 0) {
      onCardUpdate('native');
    } else {
      onCardUpdate({
        cvc: cardStatus.values.cvc,
        number: cardStatus.values.number,
        expMonth: Number(cardStatus.values.expiry.split('/')[0]),
        expYear: Number(cardStatus.values.expiry.split('/')[1]),
      });
    }
  };

  const cardChange = (v: any) => {
    setSelectedPaymentMethod(1);

    onCardUpdate({
      cvc: v.values.cvc,
      number: v.values.number,
      expMonth: Number(v.values.expiry.split('/')[0]),
      expYear: Number(v.values.expiry.split('/')[1]),
    });

    setCardStatus(v);
  };

  const done = () => {
    onClose();
  };

  return (
    <Modal
      animationInTiming={600}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <CardModalHeader>
          <Text bold color="primary" fontSize={16}>
            Choose a payment method
          </Text>
        </CardModalHeader>
        {canPayWithNativePay && (
          <CardModalChoice active={selectedPaymentMethod === 0} onPress={changeActive(0)}>
            <NativePay />
          </CardModalChoice>
        )}
        <CardModalChoice active={selectedPaymentMethod === 1} onPress={changeActive(1)}>
          <LiteCreditCardInput onChange={cardChange} />
        </CardModalChoice>
        <ViewCta onClick={done}>
          <Text bold color="fixedWhite" fontSize={20}>
            Choose
          </Text>
        </ViewCta>
      </PopUpContainer>
    </Modal>
  );
};

export default CardModal;