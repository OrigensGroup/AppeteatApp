import React from "react";
import { Text } from "react-native";

import { MenuWrapper, Img } from "./styles";

interface MenuCardProps {}

const MenuCard: React.FunctionComponent<MenuCardProps> = () => {
  return (
    <MenuWrapper>
      <Text>
        Hello World
      </Text>
    </MenuWrapper>
  );
};

export default MenuCard;
