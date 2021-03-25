import React from 'react';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';

import { ItemPictureContainer } from './styles';

interface ItemPictureProps {
  item: MenuItem;
}

const ItemPicture: React.FunctionComponent<ItemPictureProps> = ({ item }) => {
  const theme = useTheme();
  return (
    <ItemPictureContainer>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: item.image,
          priority: FastImage.priority.high,
        }}
        style={{
          width: '100%',
          height: Number(theme.spacing.multiple(40).replace('px', '')),
          borderRadius: Number(theme.spacing.double.replace('px', '')),
        }}
      />
    </ItemPictureContainer>
  );
};

export default ItemPicture;
