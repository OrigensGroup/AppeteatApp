import React from "react";
import { Dimensions } from "react-native";
import Text from "../../Shared/Text";
import {
  CardContainer,
  DrinkDesc,
  CardWrap,
  DateContainer,
  Circle,
  PriceContainer,
  ViewWrap,
} from "./styles";

interface OrderCardProps {
  items: string;
  date: string;
  price: number;
  onClick?: () => void;
}

const OrderCard: React.FunctionComponent<OrderCardProps> = ({
  items,
  date,
  price,
  onClick,
}) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick} activeOpacity={1}>
        <DateContainer>
          <Circle style={{ borderRadius: Dimensions.get("window").width / 2 }}>
            <Text fontSize={14} color="#fff" bold>
              {date}
            </Text>
            <Text fontSize={12} color="#fff" bold>
              2021
            </Text>
          </Circle>
        </DateContainer>
        <DrinkDesc>
          <Text fontSize={16} color="#000">
            {items}
          </Text>
        </DrinkDesc>
        <PriceContainer>
          <Text fontSize={16} color="#000" bold>
            {price}$
          </Text>
          <ViewWrap>
            <Text fontSize={16} color="#F69019">
              View
            </Text>
          </ViewWrap>
        </PriceContainer>
      </CardContainer>
    </CardWrap>
  );
};

export default OrderCard;
