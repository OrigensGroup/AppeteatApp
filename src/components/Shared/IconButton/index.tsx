import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { ButtonContainer } from './styles';

interface IconButtonProps {
  onClick: () => void;
  iconName: string;
  size: number
  color: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({ onClick, iconName, size, color }) => {

  return (
    <ButtonContainer onPress={onClick}>
      <Icon color={color} name={iconName} size={size} />
    </ButtonContainer>
  );
};

export default IconButton;
