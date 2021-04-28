const menuTranslations = {
  menuPage: {
    title: 'Menu',
    menuCard: {
      soldout: 'SOLDOUT',
    },
    searchModal: {
      noItems: {
        title: 'No items found',
      },
      searchTitle: {
        title: 'Search items',
      },
      searchInput: {
        title: 'Search items...',
      },
      closeCta: {
        title: 'Close',
      },
    },
    viewBasketField: {
      label: 'ViewBasket',
      placeholder: 'View Basket',
    },
  },
  singleItemPage: {
    sectionMinMax: {
      title: (min: number, max: number) => `Select minimun of ${min}, maximum of ${max}`,
    },
    ingredients: {
      title: 'Ingredients',
    },
    customise: {
      title: 'Customise item',
      placeholder: 'Type custom request',
    },
    addToBasket: {
      cta: 'Add To Basket',
      error: 'Fill in all selections',
    },
  },
};

export default menuTranslations;
