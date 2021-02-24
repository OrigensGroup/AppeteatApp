import React from "react";
import { Dimensions, Text } from "react-native";
import Title from "../../Shared/Text";
import {
  CardContainer,
  DrinkDesc,
  TextTitle,
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
            <Title fontSize={14} color="#F69019" bold>
              {date}
            </Title>
            <Title fontSize={12} color="#F69019">
              2021
            </Title>
          </Circle>
        </DateContainer>
        <DrinkDesc>
          <Title fontSize={16} color="#000">
            {items}
          </Title>
        </DrinkDesc>
        <PriceContainer>
          <Title fontSize={16} color="#000" bold>
            {price}$
          </Title>
          <ViewWrap>
            <Title fontSize={16} color="#F69019">
              View
            </Title>
          </ViewWrap>
        </PriceContainer>
      </CardContainer>
    </CardWrap>
  );
};

export default OrderCard;
