import React from 'react';

import PersonalInfo from '../../../../components/Profile/PersonalInfo';
import accountTranslations from '../../../../translations/account';

import { PersonalInformationContainer } from './styles';

interface PersonalInformationProps {
  onClick?: () => void;
}

const PersonalInformation: React.FunctionComponent<PersonalInformationProps> = () => {
  return (
    <PersonalInformationContainer>
      <PersonalInfo field={accountTranslations.accountPage.email} navigateTo="ChangeEmail" value="hkdj@hotmail.it" />
      <PersonalInfo
        field={accountTranslations.accountPage.name}
        navigateTo="ChangeName"
        value="Alessandro Carpanzano"
      />
    </PersonalInformationContainer>
  );
};

export default PersonalInformation;
