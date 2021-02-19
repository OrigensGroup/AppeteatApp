import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { CloseButtonContainer, Button } from './styles';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({ onClick }) => {
  return (
    <CloseButtonContainer>
      <Button onPress={onClick}>
        <Icon color="#0008" name="ios-close" size={28} />
      </Button>
    </CloseButtonContainer>
  );
};

export default CloseButton;
