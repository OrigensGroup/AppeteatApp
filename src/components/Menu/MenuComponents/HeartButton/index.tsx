import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  HeartButtonContainer,
} from './styles';

interface HeartButtonProps {
  onClick: () => void;
}

const HeartButton: React.FunctionComponent<HeartButtonProps> = ({ onClick }) => {
  return (
    <HeartButtonContainer onPress={onClick}>
      <Icon name="heart-outline" size={30} color="#0008" />
    </HeartButtonContainer>
  );
};

export default HeartButton;
