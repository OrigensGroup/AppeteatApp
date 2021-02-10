import React from 'react';
import { Text } from 'react-native';

import { ButtonContainer, MainWrapper, TextWrapper, TextBold } from './styles';

interface LoginProps {}

const onPress = () => console.log('YOU ARE GAE!');

const SignUpButton: React.FunctionComponent<LoginProps> = () => {
  return (
    <MainWrapper>
      <TextWrapper>
        <Text>Non hai ancora un account?</Text>
      </TextWrapper>
      <ButtonContainer onPress={onPress}>
        <TextBold>Registrati &gt;</TextBold>
      </ButtonContainer>
    </MainWrapper>
  );
};

export default SignUpButton;
