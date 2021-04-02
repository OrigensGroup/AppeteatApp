import * as Yup from 'yup';

import loginTranslations from '../../../translations/login';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(4, loginTranslations.usernameError.label).required(loginTranslations.usernameError.label),
  email: Yup.string().email(loginTranslations.emailError.label).required(loginTranslations.emailError.label),
  password: Yup.string()
    .min(8, loginTranslations.passwordLenghtError.label)
    .matches(new RegExp('^(?=(.*[a-z])(?=(.*[d]){1,}){1,})(?!.*s).{8,}$'), loginTranslations.invalidPasswordError.label)
    .required(loginTranslations.passwordRequiredError.label),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], loginTranslations.confirmPasswordError.label),
});
