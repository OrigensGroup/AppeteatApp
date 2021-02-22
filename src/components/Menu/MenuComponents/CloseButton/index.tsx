import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { CloseButtonContainer } from './styles';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({ onClick }) => {
  return (
    <CloseButtonContainer onPress={onClick}>
      <Icon color="#0008" name="ios-close" size={28} />
    </CloseButtonContainer>
  );
};

export default CloseButton;
