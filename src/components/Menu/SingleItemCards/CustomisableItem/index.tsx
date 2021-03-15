import React, { useState } from 'react';

import { MenuItem } from '../../../../types/MenuItem';
import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';
import ExplanationModal from '../../../shared/ExplanationModal';

import CustomiseSection from '../CustomiseSection';

import theme from '../../../../theme';
import customOrderTranslations from '../../../../translations/customOrder';

import { CustomisableItemContainer, ItemContainer } from './styles';

interface CustomisableItemProps {
  item: MenuItem;
}

const CustomisableItem: React.FunctionComponent<CustomisableItemProps> = ({ item }) => {
  const [modalData, setModalData] = useState({
    show: false,
    title: '',
  });

  const showDescriptionModal = ({ title }: { title: string }) => () => {
    setModalData({ show: true, title });
  };

  const closeModal = () => {
    setModalData({
      show: false,
      title: '',
    });
  };

  return (
    <CustomisableItemContainer>
      <ExplanationModal
        isVisible={modalData.show}
        onClose={closeModal}
        placeholder={customOrderTranslations.allergiesModal.placeholder}
        placeholderTextColor={theme.colors.border}
        title={modalData.title}
      />
      <CardsHeader item={item} />
      <ItemContainer>
        <ItemPicture item={item} />
        <ItemDescription item={item} />
        <CustomiseSection
          item={item}
          onClick={showDescriptionModal({ title: customOrderTranslations.allergiesModal.title })}
        />
      </ItemContainer>
      <AddToBasketButton item={item} />
    </CustomisableItemContainer>
  );
};

export default CustomisableItem;
