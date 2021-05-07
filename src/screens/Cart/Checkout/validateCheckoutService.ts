import cartTranslations from '../../../translations/cart';
import { CheckoutServices, CheckoutServiceValidationError } from '../../../types/Checkout';

export const validateCheckoutService = (checkoutService: CheckoutServices) => {
  const error: CheckoutServiceValidationError = {};
  if (checkoutService.type === 'eatin') {
    if (checkoutService.table === '') {
      error.table = cartTranslations.checkoutErrors.tableError;
    }

    if (checkoutService.paymentOption === null) {
      error.card = cartTranslations.checkoutErrors.cardError;
    }

    return Object.keys(error).length > 0 ? error : true;
  }

  if (checkoutService.type === 'takeaway') {
    if (checkoutService.phoneNumber === '') {
      error.phone = cartTranslations.checkoutErrors.phoneError;
    }

    if (checkoutService.orderTime === '') {
      error.orderTime = cartTranslations.checkoutErrors.orderTimeError;
    }

    if (checkoutService.paymentOption === null) {
      error.card = cartTranslations.checkoutErrors.cardError;
    }

    return Object.keys(error).length > 0 ? error : true;
  }

  if (checkoutService.type === 'delivery') {
    if (checkoutService.phoneNumber === '') {
      error.phone = cartTranslations.checkoutErrors.phoneError;
    }

    if (checkoutService.orderTime === '') {
      error.orderTime = cartTranslations.checkoutErrors.orderTimeError;
    }

    if (checkoutService.address === '') {
      error.address = cartTranslations.checkoutErrors.addressError;
    }

    if (checkoutService.paymentOption === null) {
      error.card = cartTranslations.checkoutErrors.cardError;
    }

    return Object.keys(error).length > 0 ? error : true;
  }

  return false;
};
