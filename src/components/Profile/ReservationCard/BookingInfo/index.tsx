import React from "react";
import {
  BookingInfoContainer,
  IconContainer
} from "./styles";
import Text from "../../../Shared/Text";

interface BookingInfoProps {
data: string;
icon: React.ReactElement;
}

const BookingInfo: React.FunctionComponent<BookingInfoProps> = ({ data, icon }) => {
  return (
        <BookingInfoContainer>
      <IconContainer>{icon}</IconContainer>
      <Text fontSize={12} color='tertiary' >{data}</Text>
      </BookingInfoContainer>
  );
};

export default BookingInfo;
