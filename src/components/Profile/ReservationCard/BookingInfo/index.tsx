import React from "react";
import {
  InfoContainer,
  IconWrap
} from "./styles";
import Text from "../../../Shared/Text";

interface BookingInfoProps {
data: string;
icon: React.ReactElement;
}

const BookingInfo: React.FunctionComponent<BookingInfoProps> = ({ data, icon }) => {
  return (
        <InfoContainer>
      <IconWrap>{icon}</IconWrap>
      <Text fontSize={12} color='#c2c2c2' >{data}</Text>
      </InfoContainer>
  );
};

export default BookingInfo;
