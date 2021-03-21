import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';

interface LoginProps {
  text: string;
  onClick: () => void;
  loading: boolean;
}

const LogInButton: React.FunctionComponent<LoginProps> = ({ loading, onClick, text }) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <Text bold color="fixedWhite" fontSize={14}>
        {text}
      </Text>
      {!loading ? (
        <IconWrapper onPress={onClick}>
          <Icon color={theme.colors.textSecondary} name="ios-arrow-forward" size={36} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <ActivityIndicator color={theme.colors.textSecondary} />
        </IconWrapper>
      )}
    </ButtonContainer>
  );
};

export default LogInButton;
