import { OrderItem } from '../types/OrderItem';

import { calculateDiscount, calculateItemPrice, fixDecimals } from './priceCalculations';

describe('priceCalculations.ts', () => {
  it('return first two digits after the comma', () => {
    expect(fixDecimals(10.999999999)).toBe(11);
  });

  it('return discounted price', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  it('return total item price', () => {
    const item: Pick<OrderItem, 'extras' | 'price' | 'quantity' | 'customPriceReduction'> = {
      customPriceReduction: 1,
      extras: [],
      price: 9.99,
      quantity: 1,
    };

    expect(calculateItemPrice(item)).toBe(9.99);
  });
});
