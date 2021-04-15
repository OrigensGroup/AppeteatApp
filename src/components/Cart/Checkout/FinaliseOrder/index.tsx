import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import stripe from 'tipsi-stripe';

import useCart from '../../../../hooks/useCart';
import useOrders from '../../../../hooks/useOrders';
import useUserData from '../../../../hooks/useUserData';

import cartTranslations from '../../../../translations/cart';
import type { Order } from '../../../../types/Order';
import { makeCardPayment, makeNativePayment } from '../../../../utils/payments';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';

import { CheckoutServices } from '../../../../types/Checkout';

import { validateCheckoutService } from '../../../../screens/Cart/Checkout/validateCheckoutService';

import { generateNumberId } from './generateNumberId';

import { FinaliseOrderContainer } from './styles';

interface FinaliseOrderProps {
  onPaymentError: (b: boolean) => void;
  checkoutService: CheckoutServices;
}

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = ({ checkoutService, onPaymentError }) => {
  const navigation = useNavigation();
  const { cart, clearCart, pricing } = useCart();
  const [, setOrders] = useOrders();
  const { addOrder, user } = useUserData();
  const [loadingPayment, setLoadingPayment] = useState(false);
  // const [settings] = useSettings();

  const finaliseOrder = async () => {
    let paymentRes = null;
    setLoadingPayment(true);

    if (!user) {
      return '';
    }

    if (!user.email) {
      return '';
    }

    if (!validateCheckoutService(checkoutService)) {
      onPaymentError(true);
      setLoadingPayment(false);
      return;
    }

    if (checkoutService.paymentOption === null) {
      onPaymentError(true);
      setLoadingPayment(false);
      return '';
    }

    if (checkoutService.paymentOption === 'native') {
      paymentRes = await makeNativePayment(
        {
          label: 'Order',
          amount: pricing.total.toString(),
        },
        {
          customerEmail: user.email,
          price: pricing.total,
          product: cart[0].id,
        },
      );
    } else {
      paymentRes = await makeCardPayment(
        {
          number: checkoutService.paymentOption.number,
          expMonth: checkoutService.paymentOption.expMonth,
          expYear: checkoutService.paymentOption.expYear,
          cvc: checkoutService.paymentOption.cvc,
        },
        {
          customerEmail: user.email,
          price: pricing.total,
          product: cart[0].id,
        },
      );
    }

    setLoadingPayment(false);

    if (paymentRes.paymentRes.type === 'Charge') {
      checkoutService.paymentOption === 'native' && stripe.completeNativePayRequest();

      const order: Order = {
        id: generateNumberId(),
        userId: user.uid,
        paymentRes: paymentRes.paymentRes,
        orderedItems: cart,
        pricing,
        day: new Date().toString(),
        ...checkoutService,
      };

      setOrders((oldOrders) => ({
        ...oldOrders,
        list: [...oldOrders.list, order],
      }));

      addOrder(order);

      clearCart();
      navigation.navigate('OrderDetails', { order });
    } else {
      checkoutService.paymentOption === 'native' && stripe.cancelNativePayRequest();

      Alert.alert(paymentRes.paymentRes.message);
    }
  };

  return (
    <FinaliseOrderContainer>
      <ViewCta onClick={!loadingPayment ? finaliseOrder : undefined}>
        <Text bold color="fixedWhite" fontSize={14}>
          {!validateCheckoutService(checkoutService)
            ? cartTranslations.checkoutPage.goToCheckoutCta.completeFields
            : !loadingPayment
            ? cartTranslations.checkoutPage.goToCheckoutCta.title
            : cartTranslations.checkoutPage.goToCheckoutCta.loading}
        </Text>
      </ViewCta>
    </FinaliseOrderContainer>
  );
};

export default FinaliseOrder;
