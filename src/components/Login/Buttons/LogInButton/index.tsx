import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import Text from '../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';

interface LoginProps {
  text: string;
  onClick: () => void;
  loading?: boolean;
  active?: boolean;
  color?: 'secondary' | 'primary' | 'tertiary' | 'quartiary' | 'errorColor' | 'fixedWhite' | 'fixedBlack';
}

const LogInButton: React.FunctionComponent<LoginProps> = ({ loading, onClick, text, active, color = 'secondary' }) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      {!loading ? (
        <IconWrapper onPress={onClick} active={active}>
          <Text fontSize={14} color={color} bold>
            {text}
          </Text>
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
