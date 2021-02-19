import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { HeartButtonContainer, Button } from "./styles";

interface HeartButtonProps {
  onClick: () => void;
}

const HeartButton: React.FunctionComponent<HeartButtonProps> = ({
  onClick,
}) => {
  return (
    <HeartButtonContainer>
      <Button onPress={onClick}>
        <Icon color="#0008" name="heart-outline" size={28} />
      </Button>
    </HeartButtonContainer>
  );
};

export default HeartButton;
