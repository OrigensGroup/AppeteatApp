import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Title from '../../shared/Text';

import BookingInfo from './BookingInfo';

import {
  Container,
  VenueDesc,
  VenueName,
  Circle,
  ReservationCardContainer,
  TextContainer,
  BottomContainer,
} from './styles';

interface ReservationCardProps {
  venue: string;
  address: string;
  date: string;
  time: string;
  people: string;
  onClick?: () => void;
}

const ReservationCard: React.FunctionComponent<ReservationCardProps> = ({
  address,
  date,
  onClick,
  people,
  time,
  venue,
}) => {
  return (
    <ReservationCardContainer>
      <Container onPress={onClick}>
        <VenueName>
          <Circle />
          <TextContainer>
            <Title bold color="primary" fontSize={16}>
              {venue}
            </Title>
          </TextContainer>
        </VenueName>
        <VenueDesc>
          <Title color="primary" fontSize={13}>
            {address}
          </Title>
        </VenueDesc>
        <BottomContainer>
          <BookingInfo data={date} icon={<AntDesign color="#c2c2c2" name="calendar" size={20} />} />
          <BookingInfo data={time} icon={<Ionicons color="#c2c2c2" name="time-outline" size={20} />} />
          <BookingInfo data={people} icon={<Ionicons color="#c2c2c2" name="people" size={20} />} />
        </BottomContainer>
      </Container>
    </ReservationCardContainer>
  );
};

export default ReservationCard;
