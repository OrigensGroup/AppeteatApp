import * as Yup from 'yup';

import loginTranslations from '../../../../translations/login';

export const PasswordSchema = Yup.object().shape({
  password: Yup.string().required(),
  newPassword: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, loginTranslations.invalidPasswordError.label)
    .required(loginTranslations.passwordRequiredError.label),
  reNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], loginTranslations.confirmPasswordError.label),
});
