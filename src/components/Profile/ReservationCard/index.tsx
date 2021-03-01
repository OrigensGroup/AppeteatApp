import React from "react";
import Title from "../../Shared/Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BookingInfo from "../../Profile/ReservationCard/BookingInfo"
import {
  CardContainer,
  DrinkDesc,
  Content,
  Circle,
  CardWrap,
  TextWrap,
  BottomContainer,
} from "./styles";

interface ReservationCardProps {
  title: string;
  address: string;
  date: string;
  time: string;
  people: string;
  onClick?: () => void;
}

const ReservationCard: React.FunctionComponent<ReservationCardProps> = ({
  title,
  address,
  date,
  time,
  people,
  onClick,
}) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <Content>
        <Circle />
        <TextWrap><Title fontSize={16} color='#000' bold>{title}</Title></TextWrap>
        </Content>
      <DrinkDesc>   
        <Title fontSize={13} color='#000'>{address}</Title>
      </DrinkDesc>
      <BottomContainer>
      <BookingInfo icon={<AntDesign name="calendar" size={20} color="#c2c2c2" />} data={date} />
      <BookingInfo icon={<Ionicons name="time-outline" size={20} color="#c2c2c2" />} data={time} />
      <BookingInfo icon={<Ionicons name="people" size={20} color="#c2c2c2" />} data={people} />
      </BottomContainer>
      </CardContainer>
    </CardWrap>
  );
};

export default ReservationCard;
