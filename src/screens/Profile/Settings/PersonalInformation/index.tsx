import React from 'react';

import PersonalInfo from '../../../../components/Profile/PersonalInfo';
import accountTranslations from '../../../../translations/profile';

import useAuth from '../../../../hooks/useAuth';

import { PersonalInformationContainer } from './styles';

interface PersonalInformationProps {
  onClick?: () => void;
}

const PersonalInformation: React.FunctionComponent<PersonalInformationProps> = () => {
  const user = useAuth();

  return (
    <PersonalInformationContainer>
      <PersonalInfo field={accountTranslations.accountPage.email} navigateTo="ChangeEmail" value={user?.email} />
      <PersonalInfo field={accountTranslations.accountPage.name} navigateTo="ChangeName" value={user?.displayName} />
    </PersonalInformationContainer>
  );
};

export default PersonalInformation;
