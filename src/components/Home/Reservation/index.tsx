import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components';

import { ReservationContainer, ReservationTitle, ReservationWrap } from './styles';

interface ReservationProps {
  onClick?: () => void;
}

const Reservation: React.FunctionComponent<ReservationProps> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <ReservationWrap>
      <ReservationTitle>Book a table</ReservationTitle>
      <ReservationContainer onPress={onClick}>
        <Icon color={theme.colors.textPrimary} name="calendar" size={50} />
      </ReservationContainer>
    </ReservationWrap>
  );
};

export default Reservation;
