import React from 'react';

import Text from '../../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';

interface SignUpButtonProps {
  text: string;
  buttonText: string;
  onClick: () => void;
}

const SignUpButton: React.FunctionComponent<SignUpButtonProps> = ({ buttonText, onClick, text }) => {
  return (
    <ButtonContainer>
      <Text color="secondary" fontSize={14}>
        {text}
      </Text>
      <IconWrapper onPress={onClick}>
        <Text bold color="secondary" fontSize={14}>
          {buttonText}
        </Text>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default SignUpButton;
