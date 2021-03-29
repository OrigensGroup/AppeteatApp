import React from 'react';

import Text from '../../../shared/Text';

import { ButtonContainer } from './styles';

interface SelectServiceButtonProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

const SelectServiceButton: React.FunctionComponent<SelectServiceButtonProps> = ({ active, onClick, title }) => {
  return (
    <ButtonContainer active={active} onPress={onClick}>
      {active ? (
        <Text color="fixedWhite" fontSize={14}>
          {title}
        </Text>
      ) : (
        <Text color="quartiary" fontSize={14}>
          {title}
        </Text>
      )}
    </ButtonContainer>
  );
};

export default SelectServiceButton;
