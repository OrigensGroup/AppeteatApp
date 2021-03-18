import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { FlatList } from 'react-native-gesture-handler';

import Text from '../../shared/Text';

import SearchBar from '../../shared/SearchBar';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../MenuSwiper/MenuCards';
import ViewCta from '../../shared/ViewCta';
import { MenuItem } from '../../../types/MenuItem';

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
  onClick: () => void;
}

const SearchModal: React.FunctionComponent<SearchModalProps> = ({ isModalVisible, onClose }) => {
  const { menu } = useMenu();
  const [searchItem, setSearchItem] = useState('');

  const itemsToShow = menu.items.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()));

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
            Search items
          </Text>
        </TitleWrapper>
        <SearchBar onUpdateText={setSearchItem} placeholder="Search items..." textContentType="none" />
        <DivLine />
        <SearchModalBottomBar>
          <FlatList data={itemsToShow} renderItem={renderItem} style={{ width: '100%', paddingTop: 16 }} />
          <SearchModalBottomBarWrapper>
            <ViewCta onClick={closeModal}>
              <Text bold color="secondary" fontSize={18}>
                Close
              </Text>
            </ViewCta>
          </SearchModalBottomBarWrapper>
        </SearchModalBottomBar>
      </SearchPopUpContainer>
    </Modal>
  );
};

export default SearchModal;
