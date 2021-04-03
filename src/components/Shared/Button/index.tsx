import React from 'react';

import Text from '../Text';

import { ButtonContainer } from './styles';

export const dataTestIds = {
  button: 'buttonTestId',
};

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ onClick, title }) => {
  return (
    <ButtonContainer onPress={onClick} testID={dataTestIds.button}>
      <Text bold color="primary" fontSize={18}>
        {title}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
