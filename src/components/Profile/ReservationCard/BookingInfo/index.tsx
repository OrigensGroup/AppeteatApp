import React from 'react';

import Text from '../../../shared/Text';

import { BookingInfoContainer, IconContainer } from './styles';

interface BookingInfoProps {
  data: string;
  icon: React.ReactElement;
}

const BookingInfo: React.FunctionComponent<BookingInfoProps> = ({ data, icon }) => {
  return (
    <BookingInfoContainer>
      <IconContainer>{icon}</IconContainer>
      <Text color="quartiary" fontSize={12}>
        {data}
      </Text>
    </BookingInfoContainer>
  );
};

export default BookingInfo;
