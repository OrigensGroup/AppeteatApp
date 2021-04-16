import { useRoute } from '@react-navigation/native';
import React from 'react';

import CustomisableItem from '../../../components/Menu/SingleItem/CustomisableItem';
import ItemWithExtras from '../../../components/Menu/SingleItem/ItemWithExtras';
import { Discount } from '../../../types/DiscountRules';
import { MenuItem } from '../../../types/MenuItem';

interface SingleItemProps {}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  const route = useRoute();

  const { discount, goBackTo, item } = route.params as {
    item: MenuItem;
    discount: Discount | undefined;
    goBackTo: string | undefined;
  };

  if (item.type === 'customisableItem') {
    return <CustomisableItem discount={discount} goBackTo={goBackTo} item={item} />;
  }

  // item.type === 'itemWithExtras'
  return <ItemWithExtras discount={discount} goBackTo={goBackTo} item={item} />;
};

export default SingleItem;
