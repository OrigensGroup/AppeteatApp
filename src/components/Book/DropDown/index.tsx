import React from 'react';

import loginTranslations from '../../../translations/menu';
import SearchField from '../SearchField';

import { DropDownContainer } from './styles';

interface DropDownProps {
  description: string;
  onClick: () => void;
}

const DropDown: React.FunctionComponent<DropDownProps> = () => {
  return (
    <DropDownContainer>
      <SearchField placeholder={loginTranslations.searchField.placeholder} textContentType="name" />
    </DropDownContainer>
  );
};

export default DropDown;
