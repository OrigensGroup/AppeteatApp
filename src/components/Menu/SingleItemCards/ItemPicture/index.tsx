import React from 'react';
import { MenuItem } from '../../../../types/MenuItem';

import { ItemPictureContainer, ItemPic } from './styles';

interface ItemPictureProps {
  item: MenuItem;
}

const ItemPicture: React.FunctionComponent<ItemPictureProps> = ({ item }) => {
  return (
    <ItemPictureContainer>
      <ItemPic source={{ uri: item.image }} />
    </ItemPictureContainer>
  );
};

export default ItemPicture;
