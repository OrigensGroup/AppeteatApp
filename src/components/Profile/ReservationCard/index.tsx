import React from "react";
import Title from "../../Shared/Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  CardContainer,
  DrinkDesc,
  Content,
  Circle,
  CardWrap,
  TextWrap,
  BottomContainer,
  BookingInfo,
  IconWrap
} from "./styles";

interface ReservationCardProps {
  title: string;
  address: string;
  date: string;
  time: string;
  people: number;
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
        <BookingInfo>
      <AntDesign name="calendar" size={20} color="#c2c2c2" />
      <IconWrap><Title fontSize={12} color='#c2c2c2' >{date}</Title></IconWrap>
      </BookingInfo>
      <BookingInfo>
      <IconWrap><Ionicons name="time-outline" size={20} color="#c2c2c2" /></IconWrap>
      <Title fontSize={12} color='#c2c2c2' >{time}</Title>
      </BookingInfo>
      <BookingInfo>
      <IconWrap><Ionicons name="people" size={20} color="#c2c2c2" /></IconWrap>
      <Title fontSize={12} color='#c2c2c2' >{people}</Title>
      </BookingInfo>
      </BottomContainer>
      
      </CardContainer>
    </CardWrap>
  );
};

export default ReservationCard;
