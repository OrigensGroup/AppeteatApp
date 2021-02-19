import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Button } from "./styles";

interface FilterProps {
  onClick: () => void;
  title: string;
}

const QrCode: React.FunctionComponent<FilterProps> = ({ onClick, title }) => {
  return (
    <Button onPress={onClick}>
      <Icon color="#0008" name="ios-qr-code-outline" size={28} />
      <Text>{title}</Text>
    </Button>
  );
};

export default QrCode;
