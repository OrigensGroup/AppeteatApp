import * as Yup from 'yup';

import loginTranslations from '../../../translations/login';

export const ForgotSchema = Yup.object().shape({
  email: Yup.string().email().required(loginTranslations.emailError.label),
});
