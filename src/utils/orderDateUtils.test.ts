import { formatDate, dateToOption, isAllowedToOrder } from './orderDateUtils';

const thirtyMinutes = 30 * 60 * 1000;

it('returns the day in hours:minutes', () => {
  expect(formatDate(new Date('Tue Apr 13 2021 01:00:00 GMT+0100 (British Summer Time)'), thirtyMinutes)).toEqual(
    '00:00',
  );
});

it('returns the day in hours:minutes - hours:minutes', () => {
  expect(dateToOption(new Date('Tue Apr 13 2021 01:00:00 GMT+0100 (British Summer Time)'), thirtyMinutes)).toEqual(
    '00:00 - 00:30',
  );
});

it('should allow to order if there is less than 2 orders in one frame', () => {
  expect(isAllowedToOrder([], '01:00 - 01:30', 2)).toBe(true);
});

it('returns false if there are already too many orders', () => {
  expect(
    isAllowedToOrder(
      [
        {
          id: '',
          day: '',
          orderedItems: [],
          paymentRes: {} as any,
          pricing: {
            checkoutType: 'eatin',
            deliveryFee: 0.0,
            servicefee: 0.0,
            subtotal: 0.0,
            tip: 0.0,
            total: 0.0,
          },
          userId: '',
          orderTime: '01:00 - 01:30',
        },
      ],
      '01:00 - 01:30',
      1,
    ),
  ).toBe(false);
});
