import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../../../../Shared/Text';

import {
  ButtonContainer,
  IconWrapper
} from './styles';


interface LoginProps {
  text: string;
  onClick: () => void;
  secondary?: boolean;
}

const LogInButton: React.FunctionComponent<LoginProps> = ({ onClick, secondary, text }) => {
  return (
    <ButtonContainer>
      <Text color='secondary' fontSize={14} bold>{text}</Text>
      <IconWrapper onPress={onClick}>
        <Icon color="#000000" name="ios-arrow-forward" size={36} />
      </IconWrapper>
    </ButtonContainer>
  );
};

export default LogInButton;
