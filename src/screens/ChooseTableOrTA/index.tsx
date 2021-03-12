import React from 'react';

import Text from '../../components/shared/Text';



import { SelectServiceContainer } from './styles';

interface SelectServiceProps {}

const SelectService: React.FunctionComponent<SelectServiceProps> = () => {


  return (
    <SelectServiceContainer>
      <Text color={'primary'} fontSize={19}>ciao</Text>
    </SelectServiceContainer>
  );
};

export default SelectService;
