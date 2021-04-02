import React from 'react';

import cartTranslations from '../../../../translations/cart';
import Text from '../../../shared/Text';

import {
  OrderStatusBall,
  OrderStatusContainer,
  OrderStatusGraphic,
  OrderStatusLine,
  OrderStatusExplaination,
  OrderStatusText,
} from './styles';

interface OrderStatusProps {
  done: boolean;
}

const OrderStatus: React.FunctionComponent<OrderStatusProps> = ({ done }) => {
  return (
    <OrderStatusContainer>
      <OrderStatusGraphic>
        <OrderStatusBall />
        <OrderStatusLine />
        <OrderStatusBall />
        <OrderStatusLine disabled={!done} />
        <OrderStatusBall disabled={!done} />
      </OrderStatusGraphic>
      <OrderStatusExplaination>
        <OrderStatusText>
          <Text color="primary" fontSize={10}>
            {cartTranslations.orderPage.orderStatus.received}
          </Text>
        </OrderStatusText>
        <OrderStatusText>
          <Text bold color="primary" fontSize={14}>
            {cartTranslations.orderPage.orderStatus.preparing}
          </Text>
        </OrderStatusText>
        <OrderStatusText>
          <Text color="primary" fontSize={10}>
            {cartTranslations.orderPage.orderStatus.done}
          </Text>
        </OrderStatusText>
      </OrderStatusExplaination>
    </OrderStatusContainer>
  );
};

export default OrderStatus;
