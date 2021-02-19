import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  BackButtonContainer,
} from './styles';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({ onClick }) => {
  return (
    <BackButtonContainer onPress={onClick}>
      <Icon name='ios-chevron-back-outline' size={40} color='#0008' />
    </BackButtonContainer>
  );
};

export default CloseButton;
