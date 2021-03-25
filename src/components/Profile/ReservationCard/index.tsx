import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useTheme } from 'styled-components';

import Title from '../../shared/Text';

import BookingInfo from './BookingInfo';

import { Container, VenueDesc, VenueName, Circle, TextContainer, BottomContainer } from './styles';

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
  const theme = useTheme();

  return (
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
        <BookingInfo data={date} icon={<AntDesign color={theme.colors.border} name="calendar" size={20} />} />
        <BookingInfo data={time} icon={<Ionicons color={theme.colors.border} name="time-outline" size={20} />} />
        <BookingInfo data={people} icon={<Ionicons color={theme.colors.border} name="people" size={20} />} />
      </BottomContainer>
    </Container>
  );
};

export default ReservationCard;
