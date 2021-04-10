import { formatDate, dateToOption, isAllowedToOrder } from './orderDateUtils';

const thirtyMinutes = 30 * 60 * 1000;

it('returns the day in hours:minutes', () => {
  expect(formatDate(new Date('2021-04-05'), thirtyMinutes)).toEqual('01:00');
});

it('returns the day in hours:minutes - hours:minutes', () => {
  expect(dateToOption(new Date('2021-04-05'), thirtyMinutes)).toEqual('01:00 - 01:30');
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
      1
    )
  ).toBe(false);
});
