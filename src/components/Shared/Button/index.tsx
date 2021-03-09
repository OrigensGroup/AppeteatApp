import React from 'react';

import Text from '../Text';

import { ButtonContainer } from './styles';

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({ onClick, title }) => {
  return (
    <ButtonContainer onPress={onClick}>
      <Text bold color="primary" fontSize={18}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default CustomButton;
