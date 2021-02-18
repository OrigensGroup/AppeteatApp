import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuTab from './MenuTab';
import {
   MenuTabsContainer,
} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Drinks',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Burgers',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pizzas',
  },
];


interface MenuTabProps {
    tabActive: number;
    onChange: (index: number) => void
}

const MenuTabs: React.FunctionComponent<MenuTabProps> = ({tabActive, onChange}) => {


  return (
      <MenuTabsContainer>
        <FlatList horizontal={true} data={DATA} keyExtractor={({index}) => index} renderItem={({item, index})=>(
          <MenuTab active={index === tabActive} index={index} onPress={onChange} title={item.title}  />
          // <MenuTab active={0 === index} index={0} onPress={onChange} title={item.title}  />
          // <MenuTab active={1 === index} index={1} onPress={onChange} title={item.title} />
        )}/>
    </MenuTabsContainer>
  );
};

export default MenuTabs;
