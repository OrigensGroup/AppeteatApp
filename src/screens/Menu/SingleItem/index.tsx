import { useRoute } from '@react-navigation/native';
import React from 'react';

import CustomisableItem from '../../../components/Menu/SingleItemCards/CustomisableItem';
import ItemWithExtras from '../../../components/Menu/SingleItemCards/ItemWithExtras';
import { Discount } from '../../../types/DiscountRules';
import { MenuItem } from '../../../types/MenuItem';

interface SingleItemProps {}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  const route = useRoute();

  const { discount, item } = route.params as { item: MenuItem; discount: Discount | undefined };

  if (item.type === 'customisableItem') {
    return <CustomisableItem discount={discount} item={item} />;
  }

  //item.type === 'itemWithExtras'
  return <ItemWithExtras discount={discount} item={item} />;
};

export default SingleItem;
