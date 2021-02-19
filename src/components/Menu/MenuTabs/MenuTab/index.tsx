import React from "react";
import { Text } from "react-native";

import { MenuTabContainer } from "./styles";

interface MenuTabProps {
  active: boolean;
  index: number;
  onPress: (index: number) => void;
}

const MenuTab: React.FunctionComponent<MenuTabProps> = ({
  active,
  index,
  onPress,
}) => {
  const onMenuPress = () => {
    onPress(index);
  };

  return (
    <MenuTabContainer active={active} onPress={onMenuPress}>
      <Text>You are Gae</Text>
    </MenuTabContainer>
  );
};

export default MenuTab;
