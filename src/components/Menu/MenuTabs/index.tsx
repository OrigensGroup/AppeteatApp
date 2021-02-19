import React from 'react';

import MenuTab from './MenuTab';
import { MenuTabsContainer } from './styles';

interface MenuTabProps {
  index: number;
  onChange: (index: number) => void;
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({ index, onChange }) => {
  return (
    <MenuTabsContainer>
      <MenuTab active={0 === index} index={0} onPress={onChange} />
      <MenuTab active={1 === index} index={1} onPress={onChange} />
    </MenuTabsContainer>
  );
};

export default MenuTabs;
