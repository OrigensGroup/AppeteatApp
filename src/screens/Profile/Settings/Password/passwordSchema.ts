import * as Yup from 'yup';

import loginTranslations from '../../../../translations/login';

export const PasswordSchema = Yup.object().shape({
  password: Yup.string().required(),
  newPassword: Yup.string()
    .min(8, loginTranslations.passwordLenghtError.label)
    .matches(new RegExp('^(?=(.*[a-z])(?=(.*[d]){1,}){1,})(?!.*s).{8,}$'), loginTranslations.invalidPasswordError.label)
    .required(loginTranslations.passwordRequiredError.label),
  reNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], loginTranslations.confirmPasswordError.label),
});
