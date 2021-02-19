import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import {
  ReservationContainer,
  ReservationTitle,
  ReservationWrap,
} from "./styles";

interface ReservationProps {
  onClick?: () => void;
}

const Reservation: React.FunctionComponent<ReservationProps> = ({
  onClick,
}) => {
  return (
    <ReservationWrap>
      <ReservationTitle>Book a table</ReservationTitle>
      <ReservationContainer onPress={onClick}>
        <Icon color="#000000" name="calendar" size={50} />
      </ReservationContainer>
    </ReservationWrap>
  );
};

export default Reservation;
