import React from 'react';

import { Booking } from '../../../types/Booking';

import { MainButton } from './styles';

interface ViewCtaProps {
  onClick: (newBooking: Booking) => void;
  redDelete?: boolean;
}

const ViewCta: React.FunctionComponent<ViewCtaProps> = ({ children, onClick, redDelete }) => {
  return (
    <MainButton onPress={onClick} redDelete={redDelete}>
      {children}
    </MainButton>
  );
};

export default ViewCta;
