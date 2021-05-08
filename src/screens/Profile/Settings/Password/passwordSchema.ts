import * as Yup from 'yup';
import { t } from '../../../../translations';

export const PasswordSchema = Yup.object().shape({
  password: Yup.string().required(),
  newPassword: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, t('loginTranslations.invalidPasswordError.label'))
    .required(t('loginTranslations.passwordRequiredError.label')),
  reNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], t('loginTranslations.confirmPasswordError.label')),
});
