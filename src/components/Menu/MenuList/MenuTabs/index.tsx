import React, { useEffect, useRef } from 'react';
import { FlatList } from 'react-native';

import { Tab } from '../../../../types/Tab';

import MenuTab from './MenuTab';

import { MenuTabsContainer } from './styles';

interface MenuTabProps {
  menuTabs: Tab[];
  tabActive: number;
  onChange: (index: number) => void;
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({ menuTabs, onChange, tabActive }) => {
  const menuTabsList = useRef<FlatList>(null);

  useEffect(() => {
    if (menuTabsList.current) {
      try {
        menuTabsList.current.scrollToIndex({ animated: true, index: tabActive });
      } catch (e) {}
    }
  }, [tabActive]);

  return (
    <MenuTabsContainer>
      <FlatList
        contentContainerStyle={{ paddingRight: 24 }}
        data={menuTabs}
        horizontal
        keyExtractor={(item) => item.id}
        ref={menuTabsList}
        renderItem={({ index, item }) => (
          <MenuTab active={index === tabActive} index={index} onPress={onChange} title={item.name} />
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </MenuTabsContainer>
  );
};

export default MenuTabs;
