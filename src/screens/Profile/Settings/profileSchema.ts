import * as Yup from 'yup';
import { t } from '../../../translations';

export const ProfileSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, t('loginTranslations.usernameError.label'))
    .required(t('loginTranslations.usernameError.label')),
  email: Yup.string().email(t('loginTranslations.emailError.label')).required(t('loginTranslations.emailError.label')),
});
