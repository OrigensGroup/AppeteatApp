import React from 'react';
import Text from '../../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';

interface SignUpButtonProps {
  text: string;
  buttonText: string;
  onClick: () => void;
}

const SignUpButton: React.FunctionComponent<SignUpButtonProps> = ({ onClick, text, buttonText }) => {
  return (
    <ButtonContainer>
      <Text color="secondary" fontSize={14}>
        {text}
      </Text>
      <IconWrapper onPress={onClick}>
        <Text color="secondary" fontSize={14} bold>
          {buttonText}
        </Text>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default SignUpButton;
