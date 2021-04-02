import * as Yup from 'yup';

import loginTranslations from '../../../translations/login';

export const ProfileSchema = Yup.object().shape({
  username: Yup.string().min(4, loginTranslations.usernameError.label).required(loginTranslations.usernameError.label),
  email: Yup.string().email(loginTranslations.emailError.label).required(loginTranslations.emailError.label),
});
