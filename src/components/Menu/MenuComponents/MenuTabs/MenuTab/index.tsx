import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  MenuTabContainer,
} from './styles';

interface MenuTabProps {
  title: string;
  active: boolean;
  index: number;
  onPress: (index: number ) => void
}

const MenuTab: React.FunctionComponent<MenuTabProps> = ({active, index, onPress, title}) => {

  const onMenuPress = () => {
    onPress(index);
  }

  return (
    <MenuTabContainer active={active} onPress={onMenuPress}>
      <Text>{title}</Text>
    </MenuTabContainer>
  );
};

export default MenuTab;
