import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../../shared/Text';

import { Button } from './styles';

interface FilterProps {
  onClick: () => void;
  title: string;
}

const QrCode: React.FunctionComponent<FilterProps> = ({ onClick, title }) => {
  return (
    <Button onPress={onClick}>
      <Icon color="#0008" name="ios-qr-code-outline" size={28} />
      <Text color="primary" fontSize={12}>
        {title}
      </Text>
    </Button>
  );
};

export default QrCode;
