import React, { useState } from 'react';

import Text from '../../shared/Text';

import SelectServiceButton from './SelectServiceButton';

import { SelectServiceWrapper, ButtonsWrapper, TitleWrapper } from './styles';

interface SelectServiceProps {
  // setShowTable: boolean;
}

const SelectService: React.FunctionComponent<SelectServiceProps> = () => {
  const [index, setIndex] = useState(0);

  return (
    <SelectServiceWrapper>
      <TitleWrapper>
        <Text bold color="primary" fontSize={16}>
          Order details
        </Text>
      </TitleWrapper>
      <ButtonsWrapper>
        <SelectServiceButton
          active={index === 0}
          onClick={() => {
            // setShowTable = setShowTable;
            setIndex(0);
          }}
          title="Eat in"
        />
        <SelectServiceButton
          active={index === 1}
          onClick={() => {
            // setShowTable = setShowTable;
            setIndex(1);
          }}
          title="Take away"
        />
      </ButtonsWrapper>
    </SelectServiceWrapper>
  );
};

export default SelectService;
