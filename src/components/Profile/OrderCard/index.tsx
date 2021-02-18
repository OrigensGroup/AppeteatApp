import React from "react";
import { Text } from "react-native";
import {
  CardContainer,
  DrinkDesc,
  TextTitle,
  CardWrap,
  GreenBorder,
} from "./styles";

interface OrderCardProps {
  items: string;
  date: string;
  onClick?: () => void;
}

const OrderCard: React.FunctionComponent<OrderCardProps> = ({
  items,
  date,
  onClick,
}) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <GreenBorder />
        <DrinkDesc>
          <TextTitle>{items}</TextTitle>
          <Text>{date}</Text>
        </DrinkDesc>
      </CardContainer>
    </CardWrap>
  );
};

export default OrderCard;
