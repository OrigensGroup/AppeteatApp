import * as Yup from 'yup';

import loginTranslations from '../../../translations/login';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(loginTranslations.emailError.label),
  password: Yup.string().required(loginTranslations.passwordError.label),
});
