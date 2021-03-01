import React from "react";
import Title from "../../Shared/Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BookingInfo from "../../Profile/ReservationCard/BookingInfo"
import {
  Container,
  VenueDesc,
  VenueName,
  Circle,
  ReservationCardContainer,
  TextContainer,
  BottomContainer,
} from "./styles";

interface ReservationCardProps {
  venue: string;
  address: string;
  date: string;
  time: string;
  people: string;
  onClick?: () => void;
}

const ReservationCard: React.FunctionComponent<ReservationCardProps> = ({
  venue,
  address,
  date,
  time,
  people,
  onClick,
}) => {
  return (
    <ReservationCardContainer>
      <Container onPress={onClick}>
        <VenueName>
        <Circle />
        <TextContainer><Title fontSize={16} color='primary' bold>{venue}</Title></TextContainer>
        </VenueName>
      <VenueDesc>   
        <Title fontSize={13} color='primary'>{address}</Title>
      </VenueDesc>
      <BottomContainer>
      <BookingInfo icon={<AntDesign name="calendar" size={20} color="#c2c2c2" />} data={date} />
      <BookingInfo icon={<Ionicons name="time-outline" size={20} color="#c2c2c2" />} data={time} />
      <BookingInfo icon={<Ionicons name="people" size={20} color="#c2c2c2" />} data={people} />
      </BottomContainer>
      </Container>
    </ReservationCardContainer>
  );
};

export default ReservationCard;
