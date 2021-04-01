import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import type { MenuItem } from '../../../../types/MenuItem';
import type { Discount } from '../../../../types/DiscountRules';

import menuTranslations from '../../../../translations/menu';

import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';
import CustomiseSection from '../CustomiseSection';

import ExplanationModal from '../../../shared/ExplanationModal';

import { CustomisableItemContainer, ItemContainer } from './styles';

interface CustomisableItemProps {
  item: MenuItem;
  discount?: Discount;
}

const CustomisableItem: React.FunctionComponent<CustomisableItemProps> = ({ discount, item }) => {
  const theme = useTheme();

  const [modalData, setModalData] = useState({
    show: false,
    title: 'Customise Item',
    inputData: '',
  });

  const showDescriptionModal = () => {
    setModalData((old) => ({ ...old, show: true }));
  };

  const closeModal = () => {
    setModalData((old) => ({ ...old, show: false }));
  };

  const updateValue = (text: string) => {
    setModalData((old) => ({ ...old, inputData: text }));
  };

  return (
    <CustomisableItemContainer>
      <ExplanationModal
        isVisible={modalData.show}
        onClose={closeModal}
        placeholder={menuTranslations.singleItemPage.customise.placeholder}
        placeholderTextColor={theme.colors.border}
        title={modalData.title}
        updateValue={updateValue}
      />
      <CardsHeader item={item} />
      <ItemContainer>
        <ItemPicture item={item} />
        <ItemDescription discount={discount} item={item} />
        <CustomiseSection item={item} onClick={showDescriptionModal} />
      </ItemContainer>
      {!item.soldout && (
        <AddToBasketButton
          discount={discount}
          extras={[{ id: 'custom', price: 0, selected: false, title: modalData.inputData }]}
          item={item}
        />
      )}
    </CustomisableItemContainer>
  );
};

export default CustomisableItem;
