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

import { CustomisableItemContainer, ItemContainer, MarginBottom } from './styles';

interface CustomisableItemProps {
  item: MenuItem;
  discount?: Discount;
  favCard?: boolean;
  profileFavoriteCard?: boolean;
}

const AddToBasketWithFlag = withFeatureFlag(AddToBasketButton, 'FEAT_ORDERING');
const MarginBottomWithFlag = withFeatureFlag(MarginBottom, 'FEAT_ORDERING');

const CustomisableItem: React.FunctionComponent<CustomisableItemProps> = ({
  discount,
  favCard,
  item,
  profileFavoriteCard,
}) => {
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
        showInput
        title={modalData.title}
        updateValue={updateValue}
      />
      <CardsHeader favoriteCard={favCard} item={item} profileFavoriteCard={profileFavoriteCard} />
      <ItemContainer>
        <ItemPicture item={item} />
        <ItemDescription discount={discount} item={item} />
        <CustomiseSection item={item} onClick={showDescriptionModal} />
      </ItemContainer>
      <MarginBottomWithFlag />
      {!item.soldout && (
        <AddToBasketWithFlag
          discount={discount}
          extras={[{ id: 'custom', price: 0, selected: false, title: modalData.inputData }]}
          item={item}
        />
      )}
    </CustomisableItemContainer>
  );
};

export default CustomisableItem;
