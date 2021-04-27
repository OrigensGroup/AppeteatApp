const menuTranslations = {
  menuPage: {
    title: 'Menu',
    menuCard: {
      soldout: 'SOLDOUT',
    },
    searchModal: {
      noItems: {
        title: 'Nessun risultato',
      },
      searchTitle: {
        title: 'Cerca',
      },
      searchInput: {
        title: 'Cerca...',
      },
      closeCta: {
        title: 'Chiudi',
      },
    },
    viewBasketField: {
      label: 'Carrello',
      placeholder: 'Carrello',
    },
  },
  singleItemPage: {
    sectionMinMax: {
      title: (min: number, max: number) => `Select minimun of ${min}, maximum of ${max}`,
    },
    ingredients: {
      title: 'Ingredienti',
    },
    customise: {
      title: 'Personalizza',
      placeholder: 'Inserisci richesta',
    },
    addToBasket: {
      cta: 'Aggiungi',
      error: 'Seleziona i campi',
    },
  },
};

export default menuTranslations;
