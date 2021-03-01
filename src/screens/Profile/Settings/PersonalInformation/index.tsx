import React from 'react';


import {
  PersonalInformationContainer,

} from "./styles";
import PersonalInfo from '../../../../components/Profile/PersonalInfo';
import accountTranslations from '../../../../translations/account';
interface PersonalInformationProps {
  onClick?: () => void;
}

const PersonalInformation: React.FunctionComponent<PersonalInformationProps> = (
  onClick
) => {

  return (
    <PersonalInformationContainer>
        <PersonalInfo navigateTo='ChangeEmail' field={accountTranslations.accountPage.email} value='hkdj@hotmail.it'></PersonalInfo>
      <PersonalInfo navigateTo='ChangeName' field={accountTranslations.accountPage.name} value='Alessandro Carpanzano'></PersonalInfo>
    </PersonalInformationContainer>
  );
};

export default PersonalInformation;
