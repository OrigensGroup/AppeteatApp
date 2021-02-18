import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  HeartButtonContainer,
  Button,

} from './styles';

interface HeartButtonProps {
  onClick: () => void;
}

const HeartButton: React.FunctionComponent<HeartButtonProps> = ( {onClick} ) => {
  return (
    <HeartButtonContainer>
      <Button onPress={onClick}>
        <Icon name="heart-outline" size={28} color="#0008" />
      </Button>
    </HeartButtonContainer>
  );
};

export default HeartButton;
