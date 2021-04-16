import React from 'react';

import Text from '../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';

interface SignUpButtonProps {
  text?: string;
  buttonText: string;
  onClick: () => void;
  small?: boolean;
}

const SignUpButton: React.FunctionComponent<SignUpButtonProps> = ({ buttonText, onClick, small, text }) => {
  return (
    <ButtonContainer>
      {text !== undefined && (
        <Text color="primary" fontSize={small ? 12 : 14}>
          {text}
        </Text>
      )}
      <IconWrapper onPress={onClick}>
        <Text align="center" bold color="primary" fontSize={small ? 12 : 14}>
          {buttonText}
        </Text>
      </IconWrapper>
    </ButtonContainer>
  );
};

export default SignUpButton;
