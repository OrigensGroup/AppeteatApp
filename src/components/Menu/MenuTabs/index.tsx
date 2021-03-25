import React from 'react';
import { FlatList } from 'react-native';

import { Tab } from '../../../types/Tab';

import MenuTab from './MenuTab';

import { MenuTabsContainer } from './styles';

interface MenuTabProps {
  menuTabs: Tab[];
  tabActive: number;
  onChange: (index: number) => void;
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({ menuTabs, onChange, tabActive }) => {
  return (
    <MenuTabsContainer>
      <FlatList
        data={menuTabs}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => (
          <MenuTab active={index === tabActive} index={index} onPress={onChange} title={item.name} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </MenuTabsContainer>
  );
};

export default MenuTabs;
