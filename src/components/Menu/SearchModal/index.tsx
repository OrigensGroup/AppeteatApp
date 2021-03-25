import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { FlatList } from 'react-native-gesture-handler';

import { View } from 'react-native';

import Text from '../../shared/Text';

import SearchBar from '../../shared/SearchBar';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../MenuSwiper/MenuCards';
import ViewCta from '../../shared/ViewCta';
import { MenuItem } from '../../../types/MenuItem';

import searchModal from '../../../translations/searchModal';

import {
  SearchPopUpContainer,
  TitleWrapper,
  DivLine,
  SearchModalBottomBar,
  SearchModalBottomBarWrapper,
} from './styles';

interface SearchModalProps {
  isModalVisible: boolean;
  onClose: () => void;
}

const SearchModal: React.FunctionComponent<SearchModalProps> = ({ isModalVisible, onClose }) => {
  const [menu] = useMenu();
  const [searchItem, setSearchItem] = useState('');

  const itemsToShow = menu.items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
  );

  const closeModal = () => {
    setSearchItem('');
    onClose();
  };

  const renderItem = ({ item }: { item: MenuItem }) => <MenuCard item={item} onClick={onClose} />;

  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={closeModal}
      style={{
        margin: 0,
      }}
    >
      <SearchPopUpContainer>
        <TitleWrapper>
          <Text bold color="primary" fontSize={18}>
            {searchModal.searchTitle.title}
          </Text>
        </TitleWrapper>
        <SearchBar
          onUpdateText={setSearchItem}
          placeholder={searchModal.searchInput.placeholder}
          textContentType="none"
          value={searchItem}
        />
        <DivLine />
        <SearchModalBottomBar>
          {searchItem !== '' ? (
            <FlatList data={itemsToShow} renderItem={renderItem} style={{ width: '100%', paddingTop: 16 }} />
          ) : (
            <View style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'center', marginTop: 24 }}>
              <Text bold color="primary" fontSize={18}>
                No items found
              </Text>
            </View>
          )}
          <SearchModalBottomBarWrapper>
            <ViewCta onClick={closeModal}>
              <Text bold color="secondary" fontSize={18}>
                {searchModal.closeCta.label}
              </Text>
            </ViewCta>
          </SearchModalBottomBarWrapper>
        </SearchModalBottomBar>
      </SearchPopUpContainer>
    </Modal>
  );
};

export default SearchModal;
