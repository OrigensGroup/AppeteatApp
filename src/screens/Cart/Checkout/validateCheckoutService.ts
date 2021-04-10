import { CheckoutServices } from '../../../types/Checkout';

export const validateCheckoutService = (checkoutService: CheckoutServices) => {
  if (checkoutService.type === 'eatin') {
    return checkoutService.table !== '' && checkoutService.paymentOption;
  }

  if (checkoutService.type === 'takeaway') {
    return checkoutService.phoneNumber !== '' && checkoutService.orderTime !== '' && checkoutService.paymentOption;
  }

  if (checkoutService.type === 'delivery') {
    return (
      checkoutService.phoneNumber !== '' &&
      checkoutService.orderTime !== '' &&
      checkoutService.address !== '' &&
      checkoutService.paymentOption
    );
  }
};
