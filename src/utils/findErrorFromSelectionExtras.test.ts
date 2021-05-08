import { findError } from './findErrorFromSelectionExtras';

describe('findErrorFromSelectionExtras.ts', () => {
  it('should find the error if you have selected less then you should', () => {
    expect(
      findError({
        selection: {
          id: '',
          minSelection: 2,
          currentSelectionsValue: 1,
          data: [],
          selection: 'multiple',
          title: '',
          selectionCheckbox: {
            item: { id: '', title: '', price: 0, selected: false },
          },
        },
      }),
    ).toBe(true);
  });

  it('should NOT find the error if you have selected less then you should', () => {
    expect(
      findError({
        selection: {
          id: '',
          minSelection: 2,
          currentSelectionsValue: 3,
          data: [],
          selection: 'multiple',
          title: '',
          selectionCheckbox: {
            item: { id: '', title: '', price: 0, selected: false },
          },
        },
      }),
    ).toBe(false);
  });
});
