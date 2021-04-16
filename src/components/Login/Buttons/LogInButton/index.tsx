import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../../../shared/Text';

import { ButtonContainer, IconWrapper } from './styles';
import loginTranslations from '../../../../translations/login';

interface LoginProps {
  text: string;
  onClick: () => void;
  loading?: boolean;
  opaqueActive?: boolean;
  color?: 'secondary' | 'primary' | 'tertiary' | 'quartiary' | 'errorColor' | 'fixedWhite' | 'fixedBlack';
}

const LogInButton: React.FunctionComponent<LoginProps> = ({
  loading,
  onClick,
  text,
  opaqueActive,
  color = 'secondary',
}) => {
  const theme = useTheme();

  return (
    <ButtonContainer>
      {!loading ? (
        <IconWrapper onPress={onClick} opaqueActive={opaqueActive}>
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
