import { useRoute } from '@react-navigation/native';
import React from 'react';

import CustomisableItem from '../../../components/Menu/SingleItemCards/CustomisableItem';
import ItemWithExtras from '../../../components/Menu/SingleItemCards/ItemWithExtras';
import { MenuItem } from '../../../types/MenuItem';

interface SingleItemProps {}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  const route = useRoute();

  const { item } = route.params as { item: MenuItem };

  if (item.type === 'customisableItem') {
    return <CustomisableItem item={item} />;
  }

  //item.type === 'itemWithExtras'
  return <ItemWithExtras item={item} />;
};

export default SingleItem;
