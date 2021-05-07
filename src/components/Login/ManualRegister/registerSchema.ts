import * as Yup from 'yup';
import { t } from '../../../translations';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, t('loginTranslations.usernameError.label'))
    .required(t('loginTranslations.usernameError.label')),
  email: Yup.string().email(t('loginTranslations.emailError.label')).required(t('loginTranslations.emailError.label')),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, t('loginTranslations.invalidPasswordError.label'))
    .required(t('loginTranslations.passwordRequiredError.label')),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], t('loginTranslations.confirmPasswordError.label')),
});
