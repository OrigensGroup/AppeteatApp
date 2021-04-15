import { useRoute } from '@react-navigation/native';
import React from 'react';

import CustomisableItem from '../../../components/Menu/SingleItem/CustomisableItem';
import ItemWithExtras from '../../../components/Menu/SingleItem/ItemWithExtras';
import { Discount } from '../../../types/DiscountRules';
import { MenuItem } from '../../../types/MenuItem';

interface SingleItemProps {}

const SingleItem: React.FunctionComponent<SingleItemProps> = () => {
  const route = useRoute();

  const { discount, favCard, item, profileFavCard } = route.params as {
    item: MenuItem;
    discount: Discount | undefined;
    favCard: boolean;
    profileFavCard: boolean;
  };

  if (item.type === 'customisableItem') {
    return <CustomisableItem discount={discount} favCard={favCard} item={item} profileFavoriteCard={profileFavCard} />;
  }

  //item.type === 'itemWithExtras'
  return <ItemWithExtras discount={discount} favCard={favCard} item={item} profileFavoriteCard={profileFavCard} />;
};

export default SingleItem;
