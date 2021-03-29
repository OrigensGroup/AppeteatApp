import React, { useState } from 'react';

import Text from '../../shared/Text';

import SelectServiceButton from './SelectServiceButton';

import { SelectServiceWrapper, ButtonsWrapper, TitleWrapper, EmptyDiv } from './styles';

interface SelectServiceProps {
  setShowTable: (b: boolean) => void;
}

const SelectService: React.FunctionComponent<SelectServiceProps> = ({ setShowTable }) => {
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
            setShowTable(true);
            setIndex(0);
          }}
          title="Eat in"
        />
        <EmptyDiv />
        <SelectServiceButton
          active={index === 1}
          onClick={() => {
            setShowTable(false);
            setIndex(1);
          }}
          title="Take away"
        />
      </ButtonsWrapper>
    </SelectServiceWrapper>
  );
};

export default SelectService;
