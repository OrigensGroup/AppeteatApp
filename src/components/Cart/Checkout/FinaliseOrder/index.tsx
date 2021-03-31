import React, { useState } from 'react';
//import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import type { Card } from 'tipsi-stripe';

import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import useOrders from '../../../../hooks/useOrders';
import useUserData from '../../../../hooks/useUserData';

import cartTranslations from '../../../../translations/cart';
import type { Order } from '../../../../types/Order';
import { makeCardPayment } from '../../../../utils/payments';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';

import { generateNumberId } from './generateNumberId';

import { FinaliseOrderContainer } from './styles';

interface FinaliseOrderProps {
  paymentOption: 'native' | Card;
}

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = ({ paymentOption }) => {
  //const navigation = useNavigation();
  const { cart, clearCart, pricing } = useCart();
  const { addOrder } = useUserData();
  const [, setOrders] = useOrders();
  const user = useAuth();
  const [loadingPayment, setLoadingPayment] = useState(false);

  const finaliseOrder = async () => {
    setLoadingPayment(true);

    if (!user) {
      return '';
    }

    if (!user.email) {
      return '';
    }

    if (paymentOption === 'native') {
      return '';
    }

    const res = await makeCardPayment(
      {
        number: paymentOption.number,
        expMonth: paymentOption.expMonth,
        expYear: paymentOption.expYear,
        cvc: paymentOption.cvc,
      },
      {
        customerEmail: user.email,
        price: pricing.total,
        product: cart[0].id,
      }
    );

    setLoadingPayment(false);

    if (res.paymentRes.type === 'Charge') {
      const order: Order = {
        id: generateNumberId(),
        userId: user.uid,
        paymentRes: res.paymentRes,
        orderedItems: cart,
        pricing,
        day: new Date().toString(),
      };

      setOrders((oldOrders) => ({
        ...oldOrders,
        list: [...oldOrders.list, order],
      }));

      addOrder(order);

      clearCart();
      //navigation.navigate('SuccessPage');
    } else {
      Alert.alert('Payment error');
    }
  };

  return (
    <FinaliseOrderContainer>
      <ViewCta onClick={finaliseOrder}>
        {!loadingPayment ? (
          <Text bold color="fixedWhite" fontSize={20}>
            {cartTranslations.checkoutPage.goToCheckoutCta.title}
          </Text>
        ) : (
          <Text bold color="fixedWhite" fontSize={20}>
            {cartTranslations.checkoutPage.goToCheckoutCta.loading}
          </Text>
        )}
      </ViewCta>
    </FinaliseOrderContainer>
  );
};

export default FinaliseOrder;
