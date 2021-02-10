import React from 'react';
import { Text } from 'react-native';

import { ButtonContainer, MainWrapper } from './styles';

interface LoginProps {}

const onPress = () => console.log('Who says I am gay?' + '  ' + new Date());

const LogInButton: React.FunctionComponent<LoginProps> = () => {
  return (
    <MainWrapper>
      <ButtonContainer onPress={onPress}>
        <Text>Log In</Text>
      </ButtonContainer>
    </MainWrapper>
  );
};

export default LogInButton;
