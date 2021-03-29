import React from 'react';

import ServiceSelection from '../../components/Cart/SelectServicex';

import { SelectServiceContainer } from './styles';

interface SelectServiceProps {}

const SelectService: React.FunctionComponent<SelectServiceProps> = () => {
  return (
    <SelectServiceContainer>
      <ServiceSelection />
    </SelectServiceContainer>
  );
};

export default SelectService;
