import React from 'react';

import ServiceSelection from '../../components/Cart/SelectService';

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
