import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import stripe from 'tipsi-stripe';
import type { Card } from 'tipsi-stripe';

import useCart from '../../../../hooks/useCart';
import useOrders from '../../../../hooks/useOrders';
import useUserData from '../../../../hooks/useUserData';

import cartTranslations from '../../../../translations/cart';
import type { Order } from '../../../../types/Order';
import { makeCardPayment, makeNativePayment } from '../../../../utils/payments';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';

import { generateNumberId } from './generateNumberId';

import { FinaliseOrderContainer } from './styles';

interface FinaliseOrderProps {
  paymentOption: 'native' | Card;
  values: {
    deliveryAddress: string;
    city: string;
    orderTime: number;
    phoneNumber: string;
  };
}

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = ({ paymentOption, values }) => {
  const navigation = useNavigation();
  const { cart, clearCart, pricing } = useCart();
  const [, setOrders] = useOrders();
  const { addOrder, user } = useUserData();
  const [loadingPayment, setLoadingPayment] = useState(false);

  const finaliseOrder = async () => {
    let paymentRes = null;
    setLoadingPayment(true);

    if (!user) {
      return '';
    }

    if (!user.email) {
      return '';
    }

    if (paymentOption === 'native') {
      paymentRes = await makeNativePayment(
        {
          label: 'Order',
          amount: pricing.total.toString(),
        },
        {
          customerEmail: user.email,
          price: pricing.total,
          product: cart[0].id,
        }
      );
    } else {
      paymentRes = await makeCardPayment(
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
    }

    setLoadingPayment(false);

    if (paymentRes.paymentRes.type === 'Charge') {
      stripe.completeNativePayRequest();

      const order: Order = {
        id: generateNumberId(),
        userId: user.uid,
        paymentRes: paymentRes.paymentRes,
        orderedItems: cart,
        pricing,
        day: new Date().toString(),
        ...values,
      };

      setOrders((oldOrders) => ({
        ...oldOrders,
        list: [...oldOrders.list, order],
      }));

      console.log(order);

      addOrder(order);

      clearCart();
      navigation.navigate('OrderDetails', { order });
    } else {
      stripe.cancelNativePayRequest();

      console.log(paymentRes.paymentRes);
      Alert.alert(paymentRes.paymentRes.message);
    }
  };

  console.log();
  return (
    <FinaliseOrderContainer>
      <ViewCta onClick={finaliseOrder}>
        <Text bold color="fixedWhite" fontSize={14}>
          {!loadingPayment
            ? cartTranslations.checkoutPage.goToCheckoutCta.title
            : cartTranslations.checkoutPage.goToCheckoutCta.loading}
        </Text>
      </ViewCta>
    </FinaliseOrderContainer>
  );
};

export default FinaliseOrder;
