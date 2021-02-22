import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import MenuTab from './MenuTab';
import { MenuTabsContainer } from './styles';

interface MenuTabProps {
  menuTabs: any;
  tabActive: number;
  onChange: (index: number) => void;
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({ menuTabs, onChange, tabActive }) => {
  return (
    <MenuTabsContainer>
      <FlatList
        data={menuTabs}
        horizontal
        keyExtractor={({ index }) => index}
        renderItem={({ index, item }) => (
          <MenuTab active={index === tabActive} index={index} onPress={onChange} title={item} />
        )}
      />
    </MenuTabsContainer>
  );
};

export default MenuTabs;
