import React from 'react';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';

interface LoginProps {
  text: string;
  onClick: () => void;
}

const LogInButton: React.FunctionComponent<LoginProps> = ({ onClick, text }) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <Text bold color="fixedWhite" fontSize={14}>
        {text}
      </Text>
      <IconWrapper onPress={onClick}>
        <Icon color={theme.colors.fixedWhite} name="ios-arrow-forward" size={36} />
      </IconWrapper>
    </ButtonContainer>
  );
};

export default LogInButton;
