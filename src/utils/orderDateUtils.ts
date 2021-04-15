import { Order } from '../types/Order';

export const formatDate = (date: Date, orderTimeFrame: number) => {
  return `${new Date(Math.round(+date / orderTimeFrame) * orderTimeFrame)
    .getHours()
    .toString()
    .padStart(2, '0')}:${new Date(Math.round(+date / orderTimeFrame) * orderTimeFrame)
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};

export const dateToOption = (orderStart: Date, orderTimeFrame: number) => {
  return `${formatDate(new Date(orderStart.getTime()), orderTimeFrame)} - ${formatDate(
    new Date(orderStart.getTime() + orderTimeFrame),
    orderTimeFrame,
  )}`;
};

export const isAllowedToOrder = (orders: Order[], orderTime: string, ordersPerSection: number) => {
  let ordersLeft = ordersPerSection;

  orders.forEach((order) => {
    if (order.orderTime === orderTime) {
      ordersLeft--;
    }
  });

  return ordersLeft > 0;
};
