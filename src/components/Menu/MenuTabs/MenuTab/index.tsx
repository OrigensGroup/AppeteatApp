import React from 'react';
import Text from '../../../Shared/Text'

import { MenuTabContainer } from './styles';

interface MenuTabProps {
  title: string;
  active: boolean;
  index: number;
  onPress: (index: number) => void;
}

const MenuTab: React.FunctionComponent<MenuTabProps> = ({ active, index, onPress, title }) => {
  const onMenuPress = () => {
    onPress(index);
  };

  return (
    <MenuTabContainer active={active} onPress={onMenuPress}>
      <Text color='primary' fontSize={18} bold>{title}</Text>
    </MenuTabContainer>
  );
};

export default MenuTab;
