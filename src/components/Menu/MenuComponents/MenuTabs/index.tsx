import React from 'react';
import { FlatList } from 'react-native';
import MenuTab from './MenuTab';

import { Tab } from '../../../../types/Tab';

import { MenuTabsContainer } from './styles';

interface MenuTabProps {
  menuTabs: Tab[];
  tabActive: number;
  onChange: (index: number) => void;
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({ menuTabs, tabActive, onChange }) => {
  return (
    <MenuTabsContainer>
      <FlatList
        horizontal={true}
        data={menuTabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <MenuTab active={index === tabActive} index={index} onPress={onChange} title={item.name} />
        )}
      />
    </MenuTabsContainer>
  );
};

export default MenuTabs;
