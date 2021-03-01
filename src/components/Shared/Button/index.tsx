import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import Text from '../Text';

import {  ButtonContainer } from './styles';

interface CustomButtonProps {
  title: string;
   onClick?: () => void;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({ title, onClick }) => {
  return (
    <ButtonContainer onPress={onClick}>
      <Text fontSize={18} color='primary' bold>{title}</Text>
    </ButtonContainer>
  );
};

export default CustomButton;
