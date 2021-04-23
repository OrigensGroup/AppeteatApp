import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { FlatList } from 'react-native-gesture-handler';

import Text from '../../../shared/Text';

import SearchBar from '../../../shared/SearchBar';
import useMenu from '../../../../hooks/useMenu';
import MenuCard from '../MenuSwiper/MenuCards';
import ViewCta from '../../../shared/ViewCta';
import { MenuItem } from '../../../../types/MenuItem';

import menuTranslations from '../../../../translations/menu';

import {
  SearchPopUpContainer,
  TitleWrapper,
  DivLine,
  SearchModalBottomBar,
  SearchModalBottomBarWrapper,
  SafeAreaViewBottom,
  SearchHeader,
  NoResultContainer,
} from './styles';

interface SearchModalProps {
  isModalVisible: boolean;
  onClose: () => void;
}

const SearchModal: React.FunctionComponent<SearchModalProps> = ({ isModalVisible, onClose }) => {
  const [menu] = useMenu();
  const [searchItem, setSearchItem] = useState('');

  const itemsToShow = menu.items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase()),
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
        <SearchHeader>
          <TitleWrapper>
            <Text bold color="primary" fontSize={18}>
              {menuTranslations.menuPage.searchModal.searchTitle.title}
            </Text>
          </TitleWrapper>
          <SearchBar
            onUpdateText={setSearchItem}
            placeholder={menuTranslations.menuPage.searchModal.searchInput.title}
            textContentType="none"
            value={searchItem}
          />
        </SearchHeader>
        <DivLine />
        <SearchModalBottomBar>
          {searchItem !== '' ? (
            <FlatList
              data={itemsToShow}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              style={{ width: '100%' }}
              contentContainerStyle={{ paddingBottom: 24 }}
            />
          ) : (
            <NoResultContainer>
              <Text bold color="primary" fontSize={18}>
                {menuTranslations.menuPage.searchModal.noItems.title}
              </Text>
            </NoResultContainer>
          )}
        </SearchModalBottomBar>
        <SearchModalBottomBarWrapper>
          <ViewCta onClick={closeModal}>
            <Text bold color="secondary" fontSize={14}>
              {menuTranslations.menuPage.searchModal.closeCta.title}
            </Text>
          </ViewCta>
        </SearchModalBottomBarWrapper>
        <SafeAreaViewBottom />
      </SearchPopUpContainer>
    </Modal>
  );
};

export default SearchModal;
