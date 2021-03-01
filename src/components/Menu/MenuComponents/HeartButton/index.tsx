import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { HeartButtonContainer } from './styles';

interface HeartButtonProps {
  onClick: () => void;
}

const HeartButton: React.FunctionComponent<HeartButtonProps> = ({ onClick }) => {
  return (
    <HeartButtonContainer onPress={onClick}>
      <Icon color="#000000" name="heart-outline" size={28} />
    </HeartButtonContainer>
  );
};

export default HeartButton;
