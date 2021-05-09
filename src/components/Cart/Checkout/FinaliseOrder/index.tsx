import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import stripe from 'tipsi-stripe';

import useCart from '../../../../hooks/useCart';
import useOrders from '../../../../hooks/useOrders';
import useUserData from '../../../../hooks/useUserData';

import type { Order } from '../../../../types/Order';
import { makeCardPayment, makeNativePayment, PaymentStatus } from '../../../../utils/payments';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';

import type { CheckoutServices, CheckoutServiceValidationError } from '../../../../types/Checkout';

import { validateCheckoutService } from '../../../../screens/Cart/Checkout/validateCheckoutService';

import { generateNumberId } from './generateNumberId';

import { FinaliseOrderContainer } from './styles';
import { t } from '../../../../translations';

interface FinaliseOrderProps {
  onPaymentError: (b: boolean) => void;
  checkoutService: CheckoutServices;
}

const isError = (e: boolean | CheckoutServiceValidationError) => typeof e !== 'boolean';

const FinaliseOrder: React.FunctionComponent<FinaliseOrderProps> = ({ checkoutService, onPaymentError }) => {
  const navigation = useNavigation();
  const { cart, pricing, clearCart } = useCart();
  const { addNewOrder } = useOrders();
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

    if (isError(validateCheckoutService(checkoutService))) {
      onPaymentError(true);
      setLoadingPayment(false);
      return;
    }

    if (checkoutService.paymentOption === null) {
      onPaymentError(true);
      setLoadingPayment(false);
      return '';
    }

    if (checkoutService.paymentOption === 'cash') {
      paymentRes = (await {
        paymentRes: {
          type: 'Charge',
        },
      }) as PaymentStatus;
    } else if (checkoutService.paymentOption === 'native') {
      paymentRes = await makeNativePayment(
        {
          label: 'Order',
          amount: pricing.total.toFixed(2),
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
        name: user.displayName,
        ...checkoutService,
      };

      await addNewOrder(order);

      addOrder(order);

      navigation.navigate('App', {
        screen: 'Menu',
        params: {
          screen: 'Cart',
          params: { screen: 'OrderDetails', params: { order } },
        },
      });

      clearCart();
    } else {
      checkoutService.paymentOption === 'native' && stripe.cancelNativePayRequest();

      Alert.alert(paymentRes.paymentRes.message);
    }
  };

  const isErrorInCheckout = isError(validateCheckoutService(checkoutService));

  return (
    <FinaliseOrderContainer>
      <ViewCta ghost={isErrorInCheckout} onClick={!loadingPayment ? finaliseOrder : undefined}>
        <Text bold color={isErrorInCheckout ? 'tertiary' : 'fixedWhite'} fontSize={14}>
          {isErrorInCheckout
            ? t('cartTranslations.checkoutPage.goToCheckoutCta.completeFields')
            : !loadingPayment
            ? t('cartTranslations.checkoutPage.goToCheckoutCta.title')
            : t('cartTranslations.checkoutPage.goToCheckoutCta.loading')}
        </Text>
      </ViewCta>
    </FinaliseOrderContainer>
  );
};

export default FinaliseOrder;
