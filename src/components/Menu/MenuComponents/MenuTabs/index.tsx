import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuTab from './MenuTab';
import {
  MenuTabsContainer,
} from './styles';


interface MenuTabProps {
  menuTabs: any;
  tabActive: number;
  onChange: (index: number) => void
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({ menuTabs, tabActive, onChange }) => {
  return (
    <MenuTabsContainer>
      <FlatList horizontal={true} data={menuTabs} keyExtractor={({ index }) => index} renderItem={({ item, index }) => (
        <MenuTab active={index === tabActive} index={index} onPress={onChange} title={item} />
      )} />
    </MenuTabsContainer>
  );
};

export default MenuTabs;
