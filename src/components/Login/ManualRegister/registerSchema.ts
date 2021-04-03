import * as Yup from 'yup';

import loginTranslations from '../../../translations/login';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(4, loginTranslations.usernameError.label).required(loginTranslations.usernameError.label),
  email: Yup.string().email(loginTranslations.emailError.label).required(loginTranslations.emailError.label),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, loginTranslations.invalidPasswordError.label)
    .required(loginTranslations.passwordRequiredError.label),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], loginTranslations.confirmPasswordError.label),
});
