import { t } from '../../../translations';
import { CheckoutServices, CheckoutServiceValidationError } from '../../../types/Checkout';

export const validateCheckoutService = (checkoutService: CheckoutServices) => {
  const error: CheckoutServiceValidationError = {};
  if (checkoutService.type === 'eatin') {
    if (checkoutService.table === '') {
      error.table = t('cartTranslations.checkoutErrors.tableError');
    }

    if (checkoutService.paymentOption === null) {
      error.card = t('cartTranslations.checkoutErrors.cardError');
    }

    return Object.keys(error).length > 0 ? error : true;
  }

  if (checkoutService.type === 'takeaway') {
    if (checkoutService.phoneNumber === '') {
      error.phone = t('cartTranslations.checkoutErrors.phoneError');
    }

    if (checkoutService.orderTime === '') {
      error.orderTime = t('cartTranslations.checkoutErrors.orderTimeError');
    }

    if (checkoutService.paymentOption === null) {
      error.card = t('cartTranslations.checkoutErrors.cardError');
    }

    return Object.keys(error).length > 0 ? error : true;
  }

  if (checkoutService.type === 'delivery') {
    if (checkoutService.phoneNumber === '') {
      error.phone = t('cartTranslations.checkoutErrors.phoneError');
    }

    if (checkoutService.orderTime === '') {
      error.orderTime = t('cartTranslations.checkoutErrors.orderTimeError');
    }

    if (checkoutService.address === '') {
      error.address = t('cartTranslations.checkoutErrors.addressError');
    }

    if (checkoutService.paymentOption === null) {
      error.card = t('cartTranslations.checkoutErrors.cardError');
    }

    return Object.keys(error).length > 0 ? error : true;
  }

  return false;
};
