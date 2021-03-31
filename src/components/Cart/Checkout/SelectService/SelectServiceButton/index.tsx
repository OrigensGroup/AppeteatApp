import React from 'react';

import Text from '../../../../shared/Text';

import { ButtonContainer } from './styles';

interface SelectServiceButtonProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

const SelectServiceButton: React.FunctionComponent<SelectServiceButtonProps> = ({ active, onClick, title }) => {
  return (
    <ButtonContainer active={active} onPress={onClick}>
      <Text color={active ? 'fixedWhite' : 'quartiary'} fontSize={14}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default SelectServiceButton;
