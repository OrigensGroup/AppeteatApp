import * as Yup from 'yup';
import { t } from '../../../translations';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(t('loginTranslations.emailError.label')),
  password: Yup.string().required(t('loginTranslations.passwordError.label')),
});
