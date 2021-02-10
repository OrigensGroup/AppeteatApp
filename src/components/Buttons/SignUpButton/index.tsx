import React from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";

import { ButtonContainer, MainWrapper } from "./styles";

interface LoginProps {}

const onPress = () => console.log("Welcome to Oriens Group!");


const LogInButton: React.FunctionComponent<LoginProps> = () => {
  return (
    <MainWrapper>
      <ButtonContainer onPress={onPress}>
          <Text>
            Sign In
          </Text>
      </ButtonContainer>
    </MainWrapper>
  );
};

export default LogInButton;
