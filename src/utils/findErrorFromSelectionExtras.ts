import { SelectionExtras } from '../types/MenuItem';

export const findError = (selectionExtras: SelectionExtras) => {
  return Object.values(selectionExtras).reduce((acc, value) => {
    if (value.minSelection <= value.currentSelectionsValue) {
      // eslint-disable-next-line no-param-reassign
      acc = false;
    }

    return acc;
  }, true);
};
