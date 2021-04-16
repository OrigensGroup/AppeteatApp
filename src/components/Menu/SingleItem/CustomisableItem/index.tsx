import React, { useState } from 'react';

import type { MenuItem } from '../../../../types/MenuItem';
import type { Discount } from '../../../../types/DiscountRules';

import menuTranslations from '../../../../translations/menu';

import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';
import CustomiseSection from '../CustomiseSection';

import ExplanationModal from '../../../shared/ExplanationModal';

import withFeatureFlag from '../../../../HOC/withFeatureFlag';

import {
  CustomisableItemContainer,
  ItemContainer,
  CustomisableItemSafeAreaTop,
  CustomisableItemSafeAreaBottom,
} from './styles';

interface CustomisableItemProps {
  item: MenuItem;
  discount?: Discount;
  goBackTo?: string;
}

const AddToBasketWithFlag = withFeatureFlag(AddToBasketButton, 'FEAT_ORDERING');
const CustomisableItemSafeAreaBottomWithFlag = withFeatureFlag(CustomisableItemSafeAreaBottom, 'FEAT_ORDERING');

const CustomisableItem: React.FunctionComponent<CustomisableItemProps> = ({ discount, goBackTo, item }) => {
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
      <CustomisableItemSafeAreaTop />
      <ExplanationModal
        isVisible={modalData.show}
        onClose={closeModal}
        placeholder={menuTranslations.singleItemPage.customise.placeholder}
        showInput
        title={modalData.title}
        updateValue={updateValue}
      />
      <CardsHeader goBackTo={goBackTo} item={item} />
      <ItemContainer>
        <ItemPicture item={item} />
        <ItemDescription discount={discount} item={item} />
        <CustomiseSection item={item} onClick={showDescriptionModal} />
      </ItemContainer>
      {!item.soldout && (
        <AddToBasketWithFlag
          discount={discount}
          extras={[
            {
              id: 'custom',
              price: 0,
              selected: false,
              title: modalData.inputData,
            },
          ]}
          item={item}
        />
      )}
      <CustomisableItemSafeAreaBottomWithFlag />
    </CustomisableItemContainer>
  );
};

export default CustomisableItem;
