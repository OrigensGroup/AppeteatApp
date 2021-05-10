import * as Yup from 'yup';
import { t } from '../../../translations';

export const ForgotSchema = Yup.object().shape({
  email: Yup.string().email().required(t('loginTranslations.emailError.label')),
});
